import { Category } from "@/core/allowCategory";
import CategoryCard from "@components/Card/CategoryCard";
import ChevronLeftIcon from "@components/Icons/ChevronLeftIcon";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const allowCategory = Object.values(Category);

export default function CategoryChooser() {
    return (
        <main className={`flex h-full min-h-screen flex-col items-center ${inter.className}`}>
            <div className="mb-20 grid h-full w-full grid-cols-4 place-items-center lg:grid-cols-6" data-cy-categorychooser>
                {allowCategory.map((name) => {
                    if (typeof (name) === typeof ("")) {
                        name = name.toString();
                        return (
                            <Link key={name} href={`/${name}/calender`}>
                                <CategoryCard text={name.replace(name.charAt(0), name.slice(0, 1)[0].toUpperCase())} icon={<ChevronLeftIcon className="text-black h-7 w-7" />} />
                            </Link>
                        );
                    }
                })}
            </div>
        </main>
    )
}