import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

const Private = (props) => {
  return (
    <FixedLayout>
      <PageSEO title={`ご挨拶 - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 space-y-2 md:mt-8 md:space-y-5">
          <PageTitle>個人情報保護方針</PageTitle>
          <div
            className="py-5 px-5 text-lg md:py-10 lg:py-16"
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line @typescript-eslint/naming-convention
              __html: `${props.data.body}`,
            }}
          />
        </div>
      </div>
    </FixedLayout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "privacy",
  });

  return {
    props: {
      data,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default Private;
