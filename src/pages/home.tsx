import { HomePage } from "components/contents/HomePage/HomePage";
import { BaseLayout } from "components/layout/BaseLayout";
import { getServerSideTranslations } from "configs/language/server";
import { withHOCs } from "hocs/withHOCs";
import { withTheme } from "hocs/withTheme";
import { withTranslations } from "hocs/withTranslations";
import { NextPage, GetStaticProps } from "next";

const Login: NextPage = () => {
  return <HomePage />;
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
      defaultLayout: true,
    },
  };
};

export default withHOCs(withTheme, withTranslations)(Login);
