/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function memePage(props: { image: string }) {

    return (
        <main className={`flex min-h-screen h-full flex-col items-center ${inter.className}`}>
            <div className="flex justify-center w-full h-full place-items-center mb-20">
                <center className="border">
                    <img src={props.image} alt="dev meme" />
                </center>
            </div>
        </main>
    )
}

export const getServerSideProps = (async (context) => {
    const data = { props: { image: "" as string } };

    const response = await fetch(`http://localhost:3000/api/${context.params!.id}`, {
        method: "GET"
    })
    const json = await response.json();

    data.props.image = json!.image;

    return data;
}) satisfies GetStaticProps;