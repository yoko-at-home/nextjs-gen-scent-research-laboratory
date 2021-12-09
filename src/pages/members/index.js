import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

/* eslint-disable import/no-default-export */
const Members = () => {
  return (
    <FluidLayout>
      <PageSEO title={`Members - ${siteMetadata.author}`} description={siteMetadata.description} />
      Membersページです。
    </FluidLayout>
  );
};

export default Members;
