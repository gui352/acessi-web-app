import { BaseLayout } from "components/layout/BaseLayout";
import { getServerSideTranslations } from "configs/language/server";
import { withHOCs } from "hocs/withHOCs";
import { withTheme } from "hocs/withTheme";
import { withTranslations } from "hocs/withTranslations";
import { NextPage, GetStaticProps } from "next";

const RegisterPCD: NextPage = () => {
  return <BaseLayout><div>{"Cadastro de PCDs"}</div></BaseLayout>;
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
    },
  };
};

export default withHOCs(withTheme, withTranslations)(RegisterPCD);
