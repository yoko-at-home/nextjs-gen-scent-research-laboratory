/* eslint-disable @typescript-eslint/naming-convention*/
import { PageSubTitle } from "src/component/PageTitle";
import { FluidLayout } from "src/layout";

import { client } from "../../../lib/client";

export default function odorId({ odor }) {
  return (
    <FluidLayout>
      <main>
        <PageSubTitle>{odor.title}</PageSubTitle>
        <p>{odor.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${odor.body}`,
          }}
        />
      </main>
    </FluidLayout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "odor-analysis" });

  const paths = data.contents.map((content) => {
    return `/product/odor-analysis/${content.id}`;
  });
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "odor-analysis", contentId: id });

  return {
    props: {
      odor: data,
    },
  };
};
