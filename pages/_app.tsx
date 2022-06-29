import '../styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="keywords" content="DK Library" />
        <meta name="author" content="DK Library" />
        <meta name="description" content="DK Library" />
        <title>DK Library</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
