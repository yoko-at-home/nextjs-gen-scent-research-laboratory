/* eslint-disable @typescript-eslint/naming-convention*/
import parse from "html-react-parser";
import type { GetStaticProps } from "next";
import type { FC } from "react";
import { ButtonToContact } from "src/component/Button/Button";
import { ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";
import type { BasicProps } from "src/types/type";

const OdorId: FC<BasicProps> = (props) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`${props.data.title} - ${siteMetadata.title}`}
        description={props.data.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        <ProductTitle>
          {props.data.title}
          <br />
          {props.data.subtitle}
        </ProductTitle>
        <div className="prose max-w-none">{parse(props.data.body)}</div>
        {!props.data.button ? null : (
          <div className="mt-20">
            <div className="mb-10 text-primary">{props.data.button_desc}</div>
            <div className="ml-20">
              <ButtonToContact>{props.data.button}</ButtonToContact>
            </div>
          </div>
        )}
        {!props.data.produced_by ? null : <div className="mt-20 font-bold">Produced by {props.data.produced_by}</div>}
      </main>
    </FixedLayout>
  );
};

export default OdorId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "odor-analysis" });

  const paths = data.contents.map((content: { id: string }) => {
    return `/product/odor-analysis/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const data = await client.get({ endpoint: "odor-analysis", contentId: id });

  return {
    props: {
      data: data,
    },
  };
};
