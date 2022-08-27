/* eslint-disable @typescript-eslint/naming-convention*/
import type { FC } from "react";
import { ButtonToContact } from "src/component/Button/Button";
import { ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";
import type { SoftwareProps } from "src/types/type";

const Software2Id: FC<SoftwareProps> = (props) => {
  return (
    <FixedLayout>
      {props.data.title && !props.data.subtitle ? (
        <PageSEO
          title={`${props.data.title}  - ${siteMetadata.title}`}
          description={props.data.description}
          ogType="website"
          ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
          siteUrl={siteMetadata.siteUrl}
        />
      ) : !props.data.title && !props.data.subtitle ? (
        <PageSEO
          title={`${props.data.product_title} - ${siteMetadata.title}`}
          description={props.data.description}
          ogType="website"
          ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
          siteUrl={siteMetadata.siteUrl}
        />
      ) : (
        <PageSEO
          title={`${props.data.title} - ${props.data.subtitle} - ${siteMetadata.title}`}
          description={props.data.description}
          ogType="website"
          ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
          siteUrl={siteMetadata.siteUrl}
        />
      )}
      <main>
        <ProductTitle>
          {props.data.title}
          <br />
          {props.data.subtitle}
          <div className="mt-3 text-3xl md:text-4xl">{props.data.product_title}</div>
        </ProductTitle>
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
      data: data,
    },
  };
};
