import { getRandomInt } from '@utils';
import dayjs from 'dayjs'
import type { NextApiRequest, NextApiResponse } from 'next'
import duration from "dayjs/plugin/duration";
import { readFile } from 'fs';
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
function handleDayCheck(day: number): boolean {
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
function dayOfTheWeekCheck(day: number): "weekend" | "day" {
  const dayOfTheWeek = dayjs().date(day).month(11).day();
  if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    return "weekend";
  }
  return "day";
}

/**
 * Handle the api call
 *
 * @async
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns {*}
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  if (!id) {
    res.status(500).json({ error: "Day not set" });
    res.closed;
    return;
  }
  if (+id > 24) {
    res.status(500).json({ error: "Number is over 24" });
    res.closed;
    return;
  }
  if (req.method === 'GET' && handleDayCheck(+id)) {
    const random1 = getRandomInt(1, dayOfTheWeekCheck(+id) === "day" ? 4 : 8);
    if (random1 > 4) {
      const weekOfTheMonth = dayjs.duration("weeks").weeks();
      const random = getRandomInt(1, 2)
      const imgPath = `./src/images/weekends/${weekOfTheMonth + 1}/${random}/dev/${random1 - 4}.jpg`;
      readFile(imgPath, (err, data) => {
        // error handle
        if (err) {
          throw err;
        }

        // get image file extension name
        const extensionName = path.extname(imgPath);

        // convert image file to base64-encoded string
        const base64Image = Buffer.from(data).toString('base64');

        // combine all strings
        res.status(200).json({ image: `data:image/${extensionName.split('.').pop()};base64,${base64Image}` });

      })
    }
    const imgPath = `./src/images/${+id}/dev/${random1}.jpg`;

    readFile(imgPath, (err, data) => {
      // error handle
      if (err) {
        throw err;
      }

      // get image file extension name
      const extensionName = path.extname(imgPath);

      // convert image file to base64-encoded string
      const base64Image = Buffer.from(data).toString('base64');

      // combine all strings
      res.status(200).json({ image: `data:image/${extensionName.split('.').pop()};base64,${base64Image}` });

    })
  } else {
    res.status(500).json({ error: "Unexpected error" });
    res.closed;
    return;
  }
}