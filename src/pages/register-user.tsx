import { RegisterUserComponent } from "components/contents/RegisterUser/RegisterUser";
import { getServerSideTranslations } from "configs/language/server";
import { NextPage, GetStaticProps } from "next";
import VLibras from "@djpfs/react-vlibras";

const RegisterUsers: NextPage = () => {
  return (
    <div>
      <RegisterUserComponent />
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
      pageName: "register-user",
    },
  };
};

export default RegisterUsers;
