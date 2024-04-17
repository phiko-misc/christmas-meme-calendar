import dayjs from "dayjs";
import { useEffect, useState } from "react";
import NumberBox from "./NumberBox";

interface time {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

/**
 * CountDown component
 * @returns {JSX.Element} The Countdown element
 * ```html
 * <!-- Only way to use it -->
 * <Countdown />
 * ```
 */
export default function Countdown(): JSX.Element {
  const toDay = dayjs();
  const christmasDate = dayjs(`${dayjs().get("year")}-12-25`);
  const [timeBeforeChristmas, setTimeBeforeChristmas] = useState<time>();

  useEffect(() => {
    const updateTime = setInterval(() => {
      const difference = toDay.millisecond() - christmasDate.millisecond();

      setTimeBeforeChristmas({
        ...timeBeforeChristmas,
        days: dayjs.duration(christmasDate.diff(toDay, "day"), "day").asDays(),
        hours: 24 - toDay.hour(),
        minutes: 60 - toDay.minute(),
        seconds: 60 - toDay.second(),
      });

      if (difference <= 0) {
        clearInterval(updateTime);
        setTimeBeforeChristmas({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => {
      clearInterval(updateTime);
    };
  });

  if (timeBeforeChristmas) {
    timeBeforeChristmas.days = zeroInFrontOfNumber(timeBeforeChristmas.days);
    timeBeforeChristmas.hours = zeroInFrontOfNumber(timeBeforeChristmas.hours);
    timeBeforeChristmas.minutes = zeroInFrontOfNumber(
      timeBeforeChristmas.minutes,
    );
    timeBeforeChristmas.seconds = zeroInFrontOfNumber(
      timeBeforeChristmas.seconds,
    );
  }

  /**
   * Used to set 0 before a number if the number is small the 10
   *
   * @param {(number | string)} number
   * @returns {string}
   * ```js
   * // Examples:
   * // If the number is smaller then 10
   * let number: string = "7";
   * number = zeroInFrontOfNumber(number); //07
   *
   * // If the number is bigger then 10
   * let number: string = "11"
   * number = zeroInFrontOfNumber(number); //11
   * ```
   */
  function zeroInFrontOfNumber(number: number | string): string {
    if (+number < 10) {
      return "0" + +number;
    }
    return number.toString();
  }

  return (
    <div className="grid grid-cols-2 gap-4 rounded-xl px-10 py-6 md:mt-2 md:flex md:items-center md:justify-between md:px-6 md:py-8">
      <NumberBox num={timeBeforeChristmas?.days ?? 0} unit="Days" />
      <span className=" -mt-8 hidden text-5xl font-normal text-gray-600 dark:text-gray-50 md:inline-block md:text-7xl">
        :
      </span>
      <NumberBox num={timeBeforeChristmas?.hours ?? 0} unit="Hours" />
      <span className="-mt-8 hidden text-5xl font-normal text-gray-600 dark:text-gray-50 md:inline-block md:text-7xl">
        :
      </span>
      <NumberBox num={timeBeforeChristmas?.minutes ?? 0} unit="Minutes" />
      <span className="-mt-8 hidden text-5xl font-normal text-gray-600 dark:text-gray-50 md:inline-block md:text-7xl">
        :
      </span>
      <NumberBox num={timeBeforeChristmas?.seconds ?? 0} unit="Seconds" />
    </div>
  );
}
