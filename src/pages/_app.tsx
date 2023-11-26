import "@/styles/globals.css";
import dayjs from "dayjs";
import type { AppProps } from "next/app";
import Head from "next/head";
import duration from "dayjs/plugin/duration";
import weekOfYear from "dayjs/plugin/weekOfYear";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Layout from "@components/layout/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  dayjs.extend(duration);
  dayjs.extend(isSameOrBefore);
  dayjs.extend(weekOfYear);
  dayjs.extend(utc)
  dayjs.extend(timezone)

  dayjs.tz.setDefault("Europe/Copenhagen")

  return (
    <main id="root-container" className="h-screen w-screen">
      <Head>
        <title>Meme Christmas Calendar</title>
        <meta
          name="description"
          content="Make the christmas time more fun with the best memes in the best time"
        />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
  );
}
