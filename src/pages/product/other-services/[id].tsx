/* eslint-disable @typescript-eslint/naming-convention*/
import type { VFC } from "react";
import { ButtonToContact } from "src/component/Button/Button";
import { ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";
import type { OtherProps } from "src/types/type";

const OtherId: VFC<OtherProps> = (props) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`他サービス - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        <ProductTitle>
          {props.other.title}
          <br />
          {props.other.subtitle}
        </ProductTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.other.body}`,
          }}
        />
        {!props.other.button ? null : (
          <div className="mt-20">
            <div className="mb-10 text-[#330033]">{props.other.button_desc}</div>
            <div className="ml-20">
              <ButtonToContact>{props.other.button}</ButtonToContact>
            </div>
          </div>
        )}
      </main>
    </FixedLayout>
  );
};

export default OtherId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "other-services" });

  const paths = data.contents.map((content: any) => {
    return `/product/other-services/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "other-services", contentId: id });

  return {
    props: {
      other: data,
    },
  };
};
