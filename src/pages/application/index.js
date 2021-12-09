import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

/* eslint-disable import/no-default-export */
const Application = () => {
  return (
    <div
      style={{
        background: "center/cover no-repeat url('/static/images/coming-soon.jpg')",
      }}
      className="z-10 text-gray-200"
    >
      <div className="z-40 bg-white bg-opacity-30">
        <FluidLayout>
          <PageSEO title={`Application - ${siteMetadata.author}`} description={siteMetadata.description} />
          <PageTitle>
            <div className="z-40">Coming soon….</div>
          </PageTitle>
        </FluidLayout>
      </div>
    </div>
  );
};

export default Application;
