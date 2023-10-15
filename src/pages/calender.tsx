import { shuffle } from "@utils";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function calender() {

    const days = [1, 19, 18, 5, 23, 7, 3, 15, 22, 9, 2, 4, 14, 11, 21, 13, 8, 12, 20, 17, 16, 10, 6, 24]
    return (
        <main className={`flex min-h-screen h-full flex-col items-center ${inter.className}`}>
            <div className="grid grid-cols-4 lg:grid-cols-6 w-full h-full place-items-center mb-20">
                {
                    days.map(day => (
                        <div key={day} className="bg-green-900 text-center w-11 h-11 lg:w-[7vw] lg:h-[7vw] flex flex-col justify-center border-l border-r border-b border-l-dashed dark:text-black">
                            <p>{day}</p>
                        </div>
                    )
                    )
                }

            </div>
        </main>
    )
}