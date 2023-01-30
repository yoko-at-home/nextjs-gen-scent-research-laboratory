/* eslint-disable @typescript-eslint/naming-convention*/
import Image from "next/image";
import type { FC } from "react";
import { ButtonToContact } from "src/component/Button/Button";
import { ProductMainTitle, ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";
import type { SampleProps } from "src/types/type";

const SampleId: FC<SampleProps> = (props) => {
  return (
    <FixedLayout>
      {!props.data.title ? (
        <PageSEO
          title={`${props.data.product_title}  - ${siteMetadata.title}`}
          description={props.data.description}
          ogType="website"
          ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
          siteUrl={siteMetadata.siteUrl}
        />
      ) : (
        <PageSEO
          title={`${props.data.title} - ${siteMetadata.title}`}
          description={props.data.description}
          ogType="website"
          ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
          siteUrl={siteMetadata.siteUrl}
        />
      )}

      <main>
        {!props.data.title ? (
          <div className="mt-8" />
        ) : (
          <div className="flex items-center justify-start">
            <ProductTitle>
              {!props.data.title ? null : props.data.title}
              <br />
              {!props.data.subtitle ? null : props.data.subtitle}
            </ProductTitle>
            {props.data.charm_body === undefined ? null : (
              <div className="ml-12 pt-3">
                <Image src={props.data.charm_body.url} width={120} height={94} alt={siteMetadata.altForImages} />
              </div>
            )}
          </div>
        )}
        <ProductMainTitle>{props.data.product_title}</ProductMainTitle>
        <div className="mb-12 text-primary">{props.data.description_body}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.data.body}`,
          }}
        />
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
      data: data,
    },
  };
};
