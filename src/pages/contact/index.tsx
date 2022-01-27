/* eslint-disable @typescript-eslint/naming-convention */
import type { NextPage } from "next";
import { FormMemberRegistration } from "src/component/Form";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

const Contact: NextPage = () => {
  return (
    <FluidLayout width="main">
      <PageSEO
        title={`Contact- ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl + `/contact`}
      />
      <PageTitle>お問い合わせ</PageTitle>
      <div className="text-zinc-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <p className="text-lg leading-7 text-zinc-600">
            資料ご請求、およびお問い合わせの場合は下記ご記入お願いいたします。
            <br />
            *は入力必須になります。
          </p>
        </div>
        <FormMemberRegistration />
      </div>
    </FluidLayout>
  );
};

export default Contact;
