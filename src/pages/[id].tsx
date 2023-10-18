/* eslint-disable @next/next/no-img-element */
import ChevronLeftIcon from "@components/icons/ChevronRightIcon copy";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google"
import Link from "next/link";
import getConfig from "next/config";

const inter = Inter({ subsets: ['latin'] });
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();


export default function memePage(props: { image: string, error: boolean }) {

    return (
        <main className={`flex min-h-screen h-full flex-col items-center ${inter.className}`}>
            <div className="flex justify-center w-full h-full place-items-center">
                <button className={`invisible absolute lg:static lg:visible lg:h-44 lg:w-44 bg-gradient-to-r from-rose-700 to-rose-900 rounded-full shadow-lg`}>
                    <Link href="calender" className='w-full flex place-content-center'>
                        <ChevronLeftIcon className='mr-4 h-16 w-16 lg:w-28 lg:h-28 text-right' />
                    </Link>
                </button>
                <center className="flex flex-col h-full place-content-center p-3">
                    {
                        props.error
                            ?
                            <div className="text-7xl">
                                <h1>You are not</h1>
                                <h1>ready for this</h1>
                            </div>
                            :
                            <img className="border-2 w-full h-full md:w-fit md:h-fit object-center m-2 max-h-full" src={`data:image/jpg;base64,${props.image}`} alt="dev meme" />
                    }
                </center>
            </div>
        </main>
    )
}

export const getServerSideProps = (async (context) => {
    const data = { props: { image: "" as string, error: false as boolean } };

    const response = await fetch(`${publicRuntimeConfig.URL || serverRuntimeConfig.URL || "http://localhost:3000/"}${context.params!.id}`, {
        method: "GET"
    })
    if (response.ok) {
        const json = await response.json();

        data.props.image = json!.image;
        return data;
    }
    data.props.error = true;

    return data;
}) satisfies GetStaticProps;