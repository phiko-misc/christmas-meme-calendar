import dayjs from "dayjs"
import { Inter } from "next/font/google"
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function calender() {
    const toDay = dayjs();
    const days = [1, 19, 18, 5, 23, 7, 3, 15, 22, 9, 2, 4, 14, 11, 21, 13, 8, 12, 20, 17, 16, 10, 6, 24];
    return (
        <main className={`flex min-h-screen h-full flex-col items-center ${inter.className}`}>
            <div className="grid grid-cols-4 lg:grid-cols-6 w-full h-full place-items-center mb-20">
                {
                    days.map(day => {
                        // If the day is after 24 december fx. if it is the 26 december set the day to 24 else set the day to current day in the loop.
                        const days = dayjs().month(11).date(toDay.month() === 11 && toDay.date() > 24 ? 24 : day).hour(0).minute(0).second(0).millisecond(0).isSameOrBefore(dayjs(toDay));
                        const style = "text-red-600 text-center w-14 h-14 lg:w-[7vw] lg:h-[7vw] flex flex-col justify-center border-l border-r border-y border-l-dashed bg-white bg-opacity-40 text-xl"
                        if (days) {
                            return (
                                <Link href={"/" + day} key={day} className={`cursor-pointer hover:bg-opacity-60 ${style}`}>
                                    <p>{day}</p>
                                </Link>
                            );
                        }
                        return (
                            <div key={day} className={`cursor-not-allowed ${style}`}>
                                <p>{day}</p>
                            </div>
                        );
                    }
                    )
                }
            </div>
        </main>
    )
}