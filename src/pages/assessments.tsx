import { NextPage, GetStaticProps } from "next";

import { withTheme } from "hocs/withTheme";
import { withTranslations } from "hocs/withTranslations";
import { withHOCs } from "hocs/withHOCs";
import { BaseLayout } from "components/layout/BaseLayout";
import { getServerSideTranslations } from "configs/language/server";

const Assessments: NextPage = () => {
  return (
    <BaseLayout>
      <div>Avaliações</div>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = async (req) => {
  const translations = await getServerSideTranslations(req.locale);

  return {
    props: {
      ...translations,
    },
  };
};

export default withHOCs(withTheme, withTranslations)(Assessments);
