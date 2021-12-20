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
    <FluidLayout>
      <PageSEO title={`Success- ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="flex justify-center mt-24">
        <Image src="/static/88696-mail.gif" alt="meil" width="180px" height="180px" />
      </div>
      <PageTitle>{router.query.subject}</PageTitle>
      <div className="container p-3 text-lg">
        <div className="mt-10 whitespace-pre-line break-words">{router.query.text}</div>
        <div className="flex justify-center">
          <Image src="/static/88696-mail.gif" alt="meil" width="180px" height="180px" />
        </div>
      </div>
    </FluidLayout>
  );
};

export default Success;
