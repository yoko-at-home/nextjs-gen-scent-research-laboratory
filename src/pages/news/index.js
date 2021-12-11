import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

const News = () => {
  return (
    <FluidLayout>
      <PageSEO title={`News - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="">
        <PageTitle>最新情報</PageTitle>
      </div>
    </FluidLayout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "news",
  });

  return {
    props: {
      data,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default News;
