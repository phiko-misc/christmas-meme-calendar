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
        
        <meta property="og:title" content="Best Meme Christmas Calendar" />
        <meta property="og:description" content="Make the christmas time more fun with the best memes in the best time" />
        <meta property="og:image" content="https://raw.githubusercontent.com/phiko-misc/christmas-meme-calendar/main/.github/assets/Instagram%20post%20-%202.png" />
        <meta property="og:url" content="https://christmas-meme-calendar.vercel.app/" />

        <meta name="twitter:title" content="Best Meme Christmas Calendar" />
        <meta name="twitter:description" content="Make the christmas time more fun with the best memes in the best time" />
        <meta name="twitter:url" content="https://raw.githubusercontent.com/phiko-misc/christmas-meme-calendar/main/.github/assets/Instagram%20post%20-%202.png" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
  );
}
