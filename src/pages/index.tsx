import { NextPage, GetStaticProps } from "next";

import { getServerSideTranslations } from "configs/language/server";
import { LoginComponent } from "components/contents/Login/Login";

const Login: NextPage = () => {
  return <LoginComponent />;
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
      pageName: "login",

    },
  };
};

export default Login;
