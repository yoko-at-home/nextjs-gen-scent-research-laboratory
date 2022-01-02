/* eslint-disable @typescript-eslint/naming-convention*/
import { ButtonToContact } from "src/component/Button/Button";
import { ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

const SoftwareId: NextPage = (props: any) => {
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
          {props.software.title}
          <br />
          {props.software.subtitle}
          <div className="mt-3 text-3xl md:text-4xl">{props.software.product_title}</div>
        </ProductTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.software.body}`,
          }}
        />
        {!props.software.button ? null : (
          <div className="mt-20">
            <div className="mb-10 text-[#330033]">{props.software.button_desc}</div>
            <div className="ml-20">
              <ButtonToContact>{props.software.button}</ButtonToContact>
            </div>
          </div>
        )}
        {!props.software.produced_by ? null : (
          <div className="mt-20 font-bold">Produced by {props.software.produced_by}</div>
        )}
      </main>
    </FixedLayout>
  );
};

export default SoftwareId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "software" });

  const paths = data.contents.map((content: any) => {
    return `/product/software/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "software", contentId: id });

  return {
    props: {
      software: data,
    },
  };
};
