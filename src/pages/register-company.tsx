import { RegisterCompany } from "components/contents/Register-Company";
import { getServerSideTranslations } from "configs/language/server";
import { withHOCs } from "hocs/withHOCs";
import { withTheme } from "hocs/withTheme";
import { withTranslations } from "hocs/withTranslations";
import { NextPage, GetStaticProps } from "next";

const NewCompany: NextPage = () => {
  return <RegisterCompany />;
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
      pageName: "register-company",
    },
  };
};

export default withHOCs(withTheme, withTranslations)(NewCompany);
