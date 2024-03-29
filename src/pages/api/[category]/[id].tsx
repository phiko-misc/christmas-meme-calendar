import { getRandomInt } from "@utils";
import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { readFileSync } from "fs";
import path from 'path';
import getConfig from "next/config";
import Category from "@/core/allowCategory";

dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekOfYear);

dayjs.tz.setDefault("Europe/Copenhagen");

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();


/**
 * NextJs config
 */
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10kb",
    },
    responseLimit: 716800,
    externalResolver: true,
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
};

/**
 * Used for debug
 * If the current month is not december
 */
const month = serverRuntimeConfig.MONTH || publicRuntimeConfig.MONTH;

/**
 * Check if it december and if the day is today or before
 * @param {number} day
 * @returns {boolean}
 */
function handleDayCheck(day: number): boolean {
  if (dayjs().month(month).date() >= day && dayjs().month() === +month) {

    return true;
  }
  return false;
}

/**
 * Checks if the day is a weekend or not
 * @param {number} day
 * @returns {("weekend" | "day")}
 */
async function dayOfTheWeekCheck(day: number): Promise<"weekend" | "day"> {
  const dayOfTheWeek = dayjs().date(day).month(11).day();
  if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    return "weekend";
  }
  return "day";
}

async function weekOfTheMonth(day: string): Promise<string> {
  const firstWeek = dayjs(day).week();
  const lastWeek = dayjs(`${dayjs().year()}-12-24`).week();
  return lastWeek - firstWeek === 0 ? "5" : (lastWeek - firstWeek).toString();
}

/**
 * Handle the api call
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns {*}
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, category } = req.query;
  const baseFileRoute = path.join(process.cwd(), 'images', `${category}/`);

  const allowCategory = Object.keys(Category);
  if (!allowCategory.includes(category!.toString())) {
    return res.status(500).json({ error: "Category does not exits" });
  }

  if (!id) {
    return res.status(500).json({ error: "Day not set" });
  }

  if (+id > 24) {
    return res.status(500).json({ error: "Number is over 24" });
  }

  if (Number.isNaN(+id)) {
    return res.status(404).json({ error: "Not found" });
  }

  if (req.method === "GET" &&  handleDayCheck(+id)) {
    const weekCheck = getRandomInt(1, (await dayOfTheWeekCheck(+id)) === "day" ? 4 : 8);

    if (weekCheck > 4) {
      const weekOfTheMonth1 = await weekOfTheMonth(
        dayjs().month(11).date(+id).format("YYYY-MM-DD"),
      );
      const random = getRandomInt(1, 2);
      const imgPath = `${baseFileRoute}weekends/${weekOfTheMonth1}/${random}/${weekCheck - 4
        }.jpg`;
      const imageBuffer = readFileSync(imgPath);
      const base64Image = Buffer.from(imageBuffer).toString("base64");
      return res.status(200).json({ image: base64Image });
    }

    const imgPath = `${baseFileRoute}${+id}/${weekCheck}.jpg`;
    const imageBuffer = readFileSync(imgPath);
    const base64Image = Buffer.from(imageBuffer).toString("base64");
    return res.status(200).json({ image: base64Image });
  } else {
    return res.status(500).json({ error: "Unexpected error" });
  }
}
