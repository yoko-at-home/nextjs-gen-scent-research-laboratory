/* eslint-disable @typescript-eslint/naming-convention*/
import type { VFC } from "react";
import { ButtonToContact } from "src/component/Button/Button";
import { ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";
import type { Software2Props } from "src/types/type";

const Software2Id: VFC<Software2Props> = (props) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`${props.software2.title} -ソフトウェア・ライブラリ - ${siteMetadata.author}`}
        description={props.software2.description}
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
        {!props.software2.button ? null : (
          <div className="mt-20">
            <div className="mb-10 text-[#330033]">{props.software2.button_desc}</div>
            <div className="ml-20">
              <ButtonToContact>{props.software2.button}</ButtonToContact>
            </div>
          </div>
        )}
        {!props.software2.produced_by ? null : (
          <div className="mt-20 font-bold">Produced by {props.software2.produced_by}</div>
        )}
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
