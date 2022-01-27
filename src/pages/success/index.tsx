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
        siteUrl={siteMetadata.siteUrl + `/success`}
      />
      <PageTitle>{router.query.subject}</PageTitle>
      <div className="flex justify-center">
        <div className="flex">
          <Image src="/static/animation/88696-mail.gif" alt="mail sent icon" width="180px" height="180px" />
          <span className="font-caribri text-xs text-gray-500 rotate-45 origin-left md:ml-32">
            <sup>LottieFiles by</sup>
            <br />
            <a
              href="https://lottiefiles.com/panizk.kazemi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              panizk.kazemi
            </a>
          </span>
        </div>
      </div>
      <div className="container">
        <div className="whitespace-pre-line">{router.query.text}</div>
      </div>
    </FluidLayout>
  );
};

export default Success;
