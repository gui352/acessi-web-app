import { ForgotPasswordComponent } from "components/contents/ForgotPassword/ForgotPassword";
import { getServerSideTranslations } from "configs/language/server";
import { NextPage, GetStaticProps } from "next";
import VLibras from "@djpfs/react-vlibras";

const ForgotPassword: NextPage = () => {
  return (
    <div>
      <div>
        <ForgotPasswordComponent />
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
export default ForgotPassword;
