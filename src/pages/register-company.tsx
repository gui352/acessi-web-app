
import { RegisterCompany } from "components/contents/Register-Company/RegisterCompany";
import { getServerSideTranslations } from "configs/language/server";
import { withHOCs } from "hocs/withHOCs";
import { withTheme } from "hocs/withTheme";
import { withTranslations } from "hocs/withTranslations";
import { NextPage, GetStaticProps } from "next";
import VLibras from "@djpfs/react-vlibras";

const NewCompany: NextPage = () => {
  return (
    <div>
      <RegisterCompany />
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

export default withHOCs(withTheme, withTranslations)(NewCompany);
