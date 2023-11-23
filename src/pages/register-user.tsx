import { RegisterUserComponent } from "components/contents/RegisterUser/RegisterUser";
import { getServerSideTranslations } from "configs/language/server";
import { NextPage, GetStaticProps } from "next";

const RegisterUsers: NextPage = () => {
  return <RegisterUserComponent />;
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
    },
  };
};

export default RegisterUsers;
