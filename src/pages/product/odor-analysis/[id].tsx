/* eslint-disable @typescript-eslint/naming-convention*/
import { ButtonToContact } from "src/component/Button/Button";
import { ProductTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { client } from "src/lib/client";

type Props = {
  odor: string;
};

const OdorId: NextPage<Props> = (props: any) => {
  return (
    <FixedLayout>
      <PageSEO
        title={`におい分析機器類 - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        <ProductTitle>
          {props.odor.title}
          <br />
          {props.odor.subtitle}
        </ProductTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.odor.body}`,
          }}
        />
        {!props.odor.button ? null : (
          <div className="mt-20">
            <div className="mb-10 text-[#330033]">{props.odor.button_desc}</div>
            <div className="ml-20">
              <ButtonToContact>{props.odor.button}</ButtonToContact>
            </div>
          </div>
        )}
        {!props.odor.produced_by ? null : <div className="mt-20 font-bold">Produced by {props.odor.produced_by}</div>}
      </main>
    </FixedLayout>
  );
};

export default OdorId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "odor-analysis" });

  const paths = data.contents.map((content: any) => {
    return `/product/odor-analysis/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "odor-analysis", contentId: id });

  return {
    props: {
      odor: data,
    },
  };
};
