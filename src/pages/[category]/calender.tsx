import dayjs from "dayjs";
import { Inter } from "next/font/google";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Category } from "@/core/allowCategory";

const inter = Inter({ subsets: ["latin"] });

export default function calender(props: { category: string }) {
  const toDay = dayjs();
  const days = [
    1, 19, 18, 5, 23, 7, 3, 15, 22, 9, 2, 4, 14, 11, 21, 13, 8, 12, 20, 17, 16,
    10, 6, 24,
  ];

  return (
    <main
      className={`flex h-full min-h-screen flex-col items-center ${inter.className}`}
    >
      <div className="mb-20 grid h-full w-full grid-cols-4 place-items-center lg:grid-cols-6">
        {days.map((day) => {
          // If the day is after 24 december fx. if it is the 26 december set the day to 24 else set the day to current day in the loop.
          const month = 11;
          const days = dayjs()
            .month(month)
            .date(toDay.month() === month && toDay.date() > 24 ? 24 : day)
            .hour(0)
            .minute(0)
            .second(0)
            .millisecond(0)
            .isSameOrBefore(dayjs(toDay));
          const style =
            "text-red-600 text-center w-14 h-14 lg:w-[7vw] lg:h-[7vw] flex flex-col justify-center border-black dark:border-white border-l border-r border-y border-l-dashed bg-white bg-opacity-40 text-xl";
          if (days) {
            return (
              <Link
                href={`/${props.category}/${day}`}
                key={day}
                className={`cursor-pointer hover:bg-gray-100 dark:hover:bg-opacity-60 ${style}`}
              >
                <p>{day}</p>
              </Link>
            );
          }
          return (
            <div key={day} className={`cursor-not-allowed ${style}`}>
              <p>{day}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export const getServerSideProps = (async (context) => {
  const data = { props: { category: "" as string } };

  const category = context.params!.category!.toString();
  const allowCategory = Object.keys(Category);
  if (!allowCategory.includes(category)) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }


  data.props.category = category;

  return data;
}) satisfies GetStaticProps;
