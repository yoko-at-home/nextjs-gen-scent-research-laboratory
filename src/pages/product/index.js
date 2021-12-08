/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/naming-convention*/
import Link from "next/link";
import { PageSubTitle } from "src/component/PageTitle";
import { Pagination } from "src/component/Pagination";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

export default function Product({ software, sample, odor, other, totalCount }) {
  const Sample = () => {
    return (
      <div>
        <PageSubTitle>GC-MS備品・におい分析用製品・サンプル</PageSubTitle>
        <ul className="grid grid-cols-3 gap-4">
          {sample.map((sample) => {
            return (
              <li key={sample.id}>
                <div
                  className="flex flex-col p-3 h-40 rounded"
                  style={{ background: `center/cover no-repeat url(${sample.image.url})` }}
                >
                  <Link href={`/product/sample/${sample.id}`}>
                    <a className="mb-3 font-bold">{sample.title}</a>
                  </Link>
                  <div className="overflow-scroll h-24">{sample.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  const Odor = () => {
    return (
      <div>
        <PageSubTitle>におい分析機器類</PageSubTitle>
        <ul className="grid grid-cols-3 gap-4">
          {odor.map((odor) => {
            return (
              <li key={odor.id}>
                <div
                  className="flex flex-col p-3 h-40 rounded"
                  style={{ background: `center/cover no-repeat url(${odor.image.url})` }}
                >
                  <Link href={`/product/odor-analysis/${odor.id}`}>
                    <a className="mb-3 font-bold">{odor.title}</a>
                  </Link>
                  <div className="overflow-scroll h-24">{odor.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  const Other = () => {
    return (
      <div>
        <PageSubTitle>他サービス</PageSubTitle>
        <ul className="grid grid-cols-3 gap-4">
          {other.map((other) => {
            return (
              <li key={other.id}>
                <div
                  className="flex flex-col p-3 h-40 rounded"
                  style={{ background: `center/cover no-repeat url(${other.image.url})` }}
                >
                  <Link href={`/product/other-services/${other.id}`}>
                    <a className="mb-3 font-bold">{other.title}</a>
                  </Link>
                  <div className="overflow-scroll h-24">{other.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  return (
    <FluidLayout>
      <div>
        <PageSubTitle>ソフトウェア・ライブラリ</PageSubTitle>
        <ul className="grid grid-cols-3 gap-4">
          {software.map((software) => {
            return (
              <li key={software.id}>
                <div
                  className="flex flex-col p-3 h-40 rounded"
                  style={{ background: `center/cover no-repeat url(${software.image.url})` }}
                >
                  <Link href={`/product/software/${software.id}`}>
                    <a className="mb-3 font-bold">{software.title}</a>
                  </Link>
                  <div className="overflow-scroll h-24">{software.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
        <Pagination totalCount={totalCount} />
      </div>
      <Sample />
      <Odor />
      <Other />
    </FluidLayout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  // const data = await client.get({ endpoint: "software" });
  const dataSample = await client.get({ endpoint: "sample" });
  const dataOdor = await client.get({ endpoint: "odor-analysis" });
  const dataOther = await client.get({ endpoint: "other-services" });

  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
  };
  const data = await fetch("https://genscent.microcms.io/api/v1/software?offset=0&limit=11", key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

  return {
    props: {
      software: data.contents,
      totalCount: data.totalCount,
      sample: dataSample.contents,
      odor: dataOdor.contents,
      other: dataOther.contents,
    },
  };
};
