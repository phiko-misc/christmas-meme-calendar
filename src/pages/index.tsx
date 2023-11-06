import SimpleButton from "@components/Button/SimpleButton";
import Countdown from "@components/Countdown/CountDown";
import ChevronRightIcon from "@components/Icons/ChevronRightIcon";
import dayjs from "dayjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const toDay = dayjs();
  const days = !dayjs()
    .month(11)
    .date(toDay.month() === 11 && toDay.date() > 24 ? 24 : toDay.date())
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .isSameOrBefore(dayjs(toDay));
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1 className=" flex place-content-center text-center text-5xl font-semibold text-black dark:text-white">
          <div className="invisible md:visible">🎅</div>
          Time Before Christmas
          <div className="invisible md:visible">🎅</div>
        </h1>
        <Countdown />
        <div className="mb-8 flex h-full place-content-center justify-center xl:mt-8">
          <SimpleButton
            link="dev/calender"
            disabled={days}
            icon={
              <ChevronRightIcon className="ml-3 h-16 w-16 text-right text-white lg:h-28 lg:w-28" />
            }
          />
        </div>
      </div>
    </main>
  );
}
