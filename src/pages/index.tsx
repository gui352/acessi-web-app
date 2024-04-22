import { NextPage, GetStaticProps } from "next";

import { getServerSideTranslations } from "configs/language/server";
import { LoginComponent } from "components/contents/Login/Login";
import VLibras from "@djpfs/react-vlibras";

const Login: NextPage = () => {
  return (
    <div>
      <LoginComponent />
      <div>
        <VLibras forceOnload={true} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
      defaultLayout: false,
    },
  };
};

export default Login;
