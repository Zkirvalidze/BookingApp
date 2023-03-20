import Head from 'next/head';
import { Inter } from 'next/font/google';

import Calendar from '@/components/Calendar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Booking App</title>
        <meta name="description" content="this is best booking app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Calendar />
      </main>
    </>
  );
}
