/* eslint-disable @typescript-eslint/naming-convention*/
import type { VFC } from "react";
import { ButtonToContact } from "src/component/Button/Button";
import { ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";
import type { SampleProps } from "src/types/type";

const SampleId: VFC<SampleProps> = (props) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`${props.sample.title} -GC-MS備品・におい分析用製品・サンプル - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />

      <main>
        <ProductTitle>{props.sample.title}</ProductTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.sample.body}`,
          }}
        />
        {!props.sample.button ? null : (
          <div className="mt-20">
            <div className="mb-10 text-[#330033]">{props.sample.button_desc}</div>
            <div className="ml-20">
              <ButtonToContact>{props.sample.button}</ButtonToContact>
            </div>
          </div>
        )}
        {!props.sample.produced_by ? null : (
          <div className="mt-20 font-bold">Produced by {props.sample.produced_by}</div>
        )}
      </main>
    </FixedLayout>
  );
};

export default SampleId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "sample" });

  const paths = data.contents.map((content: any) => {
    return `/product/sample/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "sample", contentId: id });

  return {
    props: {
      sample: data,
    },
  };
};
