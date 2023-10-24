/* eslint-disable @next/next/no-img-element */
import ChevronLeftIcon from "@components/icons/ChevronRightIcon copy";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google"
import Link from "next/link";
import getConfig from "next/config";
import SimpleButton from "@components/button/SimpleButton";

const inter = Inter({ subsets: ['latin'] });
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();


export default function memePage(props: { image: string, error: boolean }) {

    return (
        <main className={`flex min-h-screen h-full flex-col items-center ${inter.className}`}>
            <div className="flex justify-center w-full h-full place-items-center">
                <SimpleButton link="calender" className="invisible absolute lg:static lg:visible"
                    icon={<ChevronLeftIcon className='mr-4 h-16 w-16 lg:w-28 lg:h-28 text-right' />} />
                <center className="flex flex-col h-full justify-center p-3">
                    {
                        props.error
                            ?
                            <div className="text-7xl text-black dark:text-white">
                                <h1>You are not</h1>
                                <h1>ready for this</h1>
                            </div>
                            :
                            <img className="border-2 border-black dark:border-white md:w-fit md:h-fit xl:h-full md:object-contain m-2" src={`data:image/jpg;base64,${props.image}`} alt="dev meme" />
                    }
                    <div className="visible static lg:absolute lg:invisible">
                        <SimpleButton link="calender" icon={<ChevronLeftIcon className='mr-4 h-16 w-16 lg:w-28 lg:h-28 text-right text-white' />} />
                    </div>
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