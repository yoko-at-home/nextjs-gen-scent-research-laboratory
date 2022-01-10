/* eslint-disable @typescript-eslint/naming-convention*/
import type { VFC } from "react";
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";
import type { BasicProps } from "src/types/type";

const ApplicationId: VFC<BasicProps> = (props) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`Application - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        <PageSubTitle fontWeight="ordinary">{props.data.title}</PageSubTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.data.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default ApplicationId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "application" });

  const paths = data.contents.map((content: any) => {
    return `/application/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "application", contentId: id });

  return {
    props: {
      data: data,
    },
  };
};
