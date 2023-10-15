import '@/styles/globals.css'
import dayjs from 'dayjs';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import duration from "dayjs/plugin/duration";
import Layout from '@components/layout/Layout';


export default function App({ Component, pageProps }: AppProps) {
  dayjs.extend(duration);
  return (
    <main id="root-container" className='h-screen w-screen'>
      <Head>
        <title>Meme Christmas Calender</title>
        <meta name="description" content="Make the christmas time more fun with the best memes in the best time" />
      </Head>
      <Layout>
            <Component {...pageProps} />
      </Layout>
    </main>
  );
}
