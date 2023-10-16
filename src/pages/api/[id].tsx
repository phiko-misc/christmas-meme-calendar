import { getRandomInt } from '@utils';
import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'
import duration from "dayjs/plugin/duration";
import { readFile, readFileSync } from 'fs';
import path from 'path';

dayjs.extend(duration);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10kb',
    },
    responseLimit: '8mb',
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 100,
}


/**
 * Check if it december and if the day is today or before
 *
 * @param {number} day
 * @returns {boolean}
 */
async function handleDayCheck(day: number): Promise<boolean> {
  if (dayjs().month(11).date() >= day && dayjs().month() === 9) {
    return true;
  }
  return false;
}


/**
 * Checks if the day is a weekend or not
 *
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

/**
 * Handle the api call
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns {*}
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id) {
    return res.status(500).json({ error: "Day not set" });
  }
  if (+id > 24) {
    return res.status(500).json({ error: "Number is over 24" });
  }
  if (req.method === 'GET' && await handleDayCheck(+id)) {
    const random1 = getRandomInt(1, await dayOfTheWeekCheck(+id) === "day" ? 4 : 8);
    if (random1 > 4) {
      const weekOfTheMonth = dayjs.duration("weeks").weeks();
      const random = getRandomInt(1, 2)
      const imgPath = `./src/images/weekends/${weekOfTheMonth + 1}/${random}/dev/${random1 - 4}.jpg`;
      const imageBuffer = readFileSync(imgPath);
      const extensionName = path.extname(imgPath);
      const base64Image = Buffer.from(imageBuffer).toString('base64');
      return res.status(200).json({ image: `data:image/${extensionName.split('.').pop()};base64,${base64Image}` });


    }
    const imgPath = `./src/images/${+id}/dev/${random1}.jpg`;
    const imageBuffer = readFileSync(imgPath);
    const base64Image = Buffer.from(imageBuffer).toString('base64');
    const extensionName = path.extname(imgPath);
    return res.status(200).json({ image: `data:image/${extensionName.split('.').pop()};base64,${base64Image}` });
  } else {
    return res.status(500).json({ error: "Unexpected error" });
  }
}