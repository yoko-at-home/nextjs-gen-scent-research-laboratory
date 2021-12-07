/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";

const Success: NextPage = () => {
  const router = useRouter();
  // console.log(router.query);
  return (
    <FixedLayout>
      <PageSEO title={`Success- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>{router.query.subject}</PageTitle>
      <div className="container p-3 text-lg">
        <div className="mt-10 whitespace-pre-line break-words">{router.query.text}</div>
      </div>
    </FixedLayout>
  );
};

export default Success;
