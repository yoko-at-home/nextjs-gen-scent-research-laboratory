import { PageSubTitle, PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

const News = (props) => {
  return (
    <FluidLayout>
      <PageSEO title={`News - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="">
        <PageTitle>最新情報</PageTitle>
        <div
          className="px-5 mb-20 text-gray-500 sm:text-lg"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.data.body}`,
          }}
        />
        <PageSubTitle>2021年の活動</PageSubTitle>
        <div
          className="px-5 text-gray-500 sm:text-lg"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.data.body2021}`,
          }}
        />
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
