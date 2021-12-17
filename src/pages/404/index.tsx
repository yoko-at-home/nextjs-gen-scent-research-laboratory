/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

const Custom404: NextPage = () => {
  return (
    <FluidLayout>
      <PageSEO title={`Page Not Found- ${siteMetadata.author}`} description={siteMetadata.description} />
      <PageTitle>ページが見つかりません</PageTitle>
      <div className="container p-3 text-lg">
        <div className="flex justify-center">
          <img src="/static/404-error.gif" alt="meil" width="180px" />
        </div>
      </div>
    </FluidLayout>
  );
};

export default Custom404;
