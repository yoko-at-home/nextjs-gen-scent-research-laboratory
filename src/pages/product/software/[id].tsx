/* eslint-disable @typescript-eslint/naming-convention*/
/* eslint-disable @typescript-eslint/no-unused-vars*/
import parse from "html-react-parser";
import type { GetStaticProps } from "next";
import type { FC } from "react";
import { ButtonToContact } from "src/component/Button/Button";
import { ProductMainTitle, ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";
import type { SoftwareProps } from "src/types/type";

const SoftwareId: FC<SoftwareProps> = (props) => {
  const SeoTitleOnly = () => {
    return (
      <PageSEO
        title={`${props.data.title}  - ${siteMetadata.title}`}
        description={props.data.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
    );
  };
  const SeoProductTitleOnly = () => {
    return (
      <PageSEO
        title={`${props.data.product_title} - ${siteMetadata.title}`}
        description={props.data.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
    );
  };
  const SeoTitleWithSubtitle = () => {
    return (
      <PageSEO
        title={`${props.data.title} - ${props.data.subtitle} - ${siteMetadata.title}`}
        description={props.data.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
    );
  };
  return (
    <FixedLayout>
      {props.data.title && !props.data.subtitle ? (
        <SeoTitleOnly />
      ) : !props.data.title && !props.data.subtitle ? (
        <SeoProductTitleOnly />
      ) : (
        <SeoTitleWithSubtitle />
      )}

      <main>
        {!props.data.title ? (
          <div className="mt-8" />
        ) : (
          <ProductTitle>
            {!props.data.title ? null : props.data.title}
            <br />
            {!props.data.subtitle ? null : props.data.subtitle}
          </ProductTitle>
        )}
        <ProductMainTitle>{props.data.product_title}</ProductMainTitle>
        <div className="mb-12 text-primary">
          {props.data.description_body}
          <br />
          {props.data.description_body2}
        </div>
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

export default SoftwareId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "software" });

  const paths = data.contents.map((content: { id: string }) => {
    return `/product/software/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const data = await client.get({ endpoint: "software", contentId: id });

  return {
    props: {
      data: data,
    },
  };
};
