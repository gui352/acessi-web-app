import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { PrimeReactProvider } from "primereact/api";
import { BaseLayout } from "components/layout/BaseLayout";
import { withHOCs } from "hocs/withHOCs";
import { withTheme } from "hocs/withTheme";
import { withTranslations } from "hocs/withTranslations";
import { ReactNode } from "react";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const value = {
    hideOverlayOnScroll: true,
  };

  console.log("PROPS", pageProps.pageName !== "login");
  console.log("PROPS", pageProps.pageName);

  let componentResult: ReactNode = {};

  if (pageProps.pageName === "login") {
    componentResult = <Component {...pageProps} />;
  } else if (pageProps.pageName === "register-user") {
    componentResult = <Component {...pageProps} />;
  } else {
    componentResult = (
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    );
  }

  return (
    <>
      <PrimeReactProvider>
        <Head>
          <meta name="google" content="notranslate" />
          <title>{process.env.SITE_NAME}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {componentResult}
      </PrimeReactProvider>
    </>
  );
};

export default withHOCs(withTheme, withTranslations)(App);
