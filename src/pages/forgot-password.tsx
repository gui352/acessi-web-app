import { ForgotPasswordComponent } from "components/contents/ForgotPassword/ForgotPassword";
import { getServerSideTranslations } from "configs/language/server";
import { NextPage, GetStaticProps } from "next";

const ForgotPassword: NextPage = () => {
  return <ForgotPasswordComponent />;
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
    },
  };
};
export default ForgotPassword;
