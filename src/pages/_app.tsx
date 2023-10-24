import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { PrimeReactProvider } from "primereact/api";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const value = {
    hideOverlayOnScroll: true,
  };

  return (
    <>
      <PrimeReactProvider>
        <Head>
          <meta name="google" content="notranslate" />
          <title>{process.env.SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </>
  );
};

export default App;
