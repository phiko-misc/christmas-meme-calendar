/* eslint-disable @next/next/no-img-element */
import ChevronLeftIcon from "@components/Icons/ChevronRightIcon copy";
import { GetStaticProps } from "next";
import { Inter } from "next/font/google";
import getConfig from "next/config";
import SimpleButton from "@components/Button/SimpleButton";
import { Category } from "@/core/allowCategory";

const inter = Inter({ subsets: ["latin"] });
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

interface Props {
  image: string;
  error: boolean;
  category: string;
}

export default function memePage(props: Props) {
  return (
    <main
      className={`flex h-full min-h-screen flex-col items-center ${inter.className}`}
    >
      <div className="flex h-full w-full place-items-center justify-center">
        <SimpleButton
          link={`/${props.category}/calender`}
          className="invisible absolute lg:visible lg:static"
          icon={
            <ChevronLeftIcon className="mr-4 h-16 w-16 text-right lg:h-28 lg:w-28" />
          }
        />
        <center className="flex h-full flex-col justify-center p-3">
          {props.error ? (
            <div className="text-7xl text-black dark:text-white">
              <h1>You are not</h1>
              <h1>ready for this</h1>
            </div>
          ) : (
            <img
              className="m-2 border-2 border-black dark:border-white md:h-fit md:w-fit md:object-contain xl:h-full"
              src={`data:image/jpg;base64,${props.image}`}
              alt={`${props.category} meme`}
            />
          )}
          <div className="visible static lg:invisible lg:absolute">
            <SimpleButton
              link={`/${props.category}/calender`}
              icon={
                <ChevronLeftIcon className="mr-4 h-16 w-16 text-right text-white lg:h-28 lg:w-28" />
              }
            />
          </div>
        </center>
      </div>
    </main>
  );
}

export const getServerSideProps = (async (context) => {
  const data = { props: { image: "" as string, category: "" as string, error: false as boolean } };

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

  const response = await fetch(
    `${publicRuntimeConfig.URL ||
    serverRuntimeConfig.URL ||
    "http://localhost:3000/"
    }${context.params!.category}/${context.params!.id}`,
    {
      method: "GET",
    },
  );
  if (response.ok) {
    const json = await response.json();

    data.props.image = json!.image;
    return data;
  }
  data.props.error = true;

  return data;
}) satisfies GetStaticProps;