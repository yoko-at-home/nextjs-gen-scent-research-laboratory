/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

const Success: NextPage = () => {
  const router = useRouter();
  return (
    <FluidLayout width="main">
      <PageSEO
        title={`Success- ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <PageTitle>{router.query.subject}</PageTitle>
      <div className="container">
        <div className="whitespace-pre-line">{router.query.text}</div>
      </div>
      <div className="flex justify-center">
        <Image src="/static/animation/88696-mail.gif" alt="mail sent icon" width="180px" height="180px" />
      </div>
      <div className="container mx-16">
        <div className="whitespace-pre-line">{router.query.text2}</div>
      </div>
    </FluidLayout>
  );
};

export default Success;
