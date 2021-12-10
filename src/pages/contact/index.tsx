/* eslint-disable @typescript-eslint/naming-convention */
import type { NextPage } from "next";
import { FormMemberRegistration } from "src/component/Form";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

const Contact: NextPage = () => {
  return (
    <FluidLayout>
      <PageSEO title={`Contact- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>Contact</PageTitle>
      <FormMemberRegistration />
    </FluidLayout>
  );
};

export default Contact;
