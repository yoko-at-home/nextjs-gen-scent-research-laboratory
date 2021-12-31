/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import { ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

type Props = {
  software2: string;
};

const Software2Id: NextPage<Props> = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`ソフトウェア・ライブラリ - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        <ProductTitle>
          {props.software2.title}
          <br />
          {props.software2.subtitle}
          <div className="mt-3 text-3xl md:text-4xl">{props.software2.product_title}</div>
        </ProductTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.software2.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default Software2Id;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "software2" });

  const paths = data.contents.map((content: any) => {
    return `/product/software2/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "software2", contentId: id });

  return {
    props: {
      software2: data,
    },
  };
};
