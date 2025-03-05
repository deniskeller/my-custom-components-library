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
        <meta
          name="keywords"
          content="Denis Keller, UI components, custom components, react-components, components, React custom components, react-ui, react typescript components, typescript components"
        />
        <meta name="author" content="Denis Keller" />
        <meta name="description" content="Custom UI components" />
        <title>DK UI components</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
