import { NextPage, GetStaticProps } from "next";

import { withTheme } from "hocs/withTheme";
import { withTranslations } from "hocs/withTranslations";
import { withHOCs } from "hocs/withHOCs";
import { getServerSideTranslations } from "configs/language/server";
import { AssessmentsComponent } from "components/contents/Assessments";

const Assessments: NextPage = () => {
  return <AssessmentsComponent />;
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

export default withHOCs(withTheme, withTranslations)(Assessments);
