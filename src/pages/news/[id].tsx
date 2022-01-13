/* eslint-disable @typescript-eslint/naming-convention*/
import type { VFC } from "react";
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";
import type { BasicProps } from "src/types/type";

const NewsId: VFC<BasicProps> = (props) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`${props.data.description} - News - ${siteMetadata.title}`}
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

export default NewsId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content: any) => {
    return `/news/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      data: data,
    },
  };
};
