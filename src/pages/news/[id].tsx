/* eslint-disable @typescript-eslint/naming-convention*/
import axios from "axios";
import type { GetStaticPaths, GetStaticProps } from "next";
import ErrorPage from "next/error";
import Link from "next/link";
import type { VFC } from "react";
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import type { SimpleObject } from "src/types/pageType";

interface Props {
  id: any;
  data: SimpleObject;
  preview: any;
  content: any;
}

const NewsId: VFC<Props> = (props) => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <FixedLayout>
      <PageSEO
        title={`${props.data.title} - News - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main>
        {props.preview && <Link href="/api/clear-preview">プレビューモードを解除</Link>}
        <PageSubTitle fontWeight="ordinary">{props.data.title}</PageSubTitle>
        <div
          dangerouslySetInnerHTML={{
            __html: `${props.data.body}`,
          }}
        />
      </main>
    </FixedLayout>
  );
};

export default NewsId;

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.CMS_API_KEY || "" },
  };
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "news", key);
  const data: Array<Props> = await res.data.contents;
  const paths = data.map((item) => {
    return {
      params: { id: `/news/${item.id.toString()}` },
    };
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<{ data: SimpleObject }, { id: string }, { draftKey: string }> = async ({
  params,
  preview,
  previewData,
}) => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.CMS_API_KEY || "" },
  };
  let url = process.env.NEXT_PUBLIC_API_URL + "news/" + params?.id;
  // 下書きは draftKey を含む必要があるのでプレビューの時は追加
  // console.log(url);

  if (preview) {
    url += `?draftKey=${previewData?.draftKey}`;
  }
  const res = await axios.get(url, key);
  const data: SimpleObject = await res.data;
  return {
    props: { data: data },
  };
};
