/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/naming-convention*/
import Image from "next/image";
import Link from "next/link";
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

export default function Product({ software, sample, odor, other, software2 }) {
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
                  <div className="overflow-scroll w-3/4 h-24">{sample.description}</div>
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
        <div className="flex flex-row mb-6">
          <div>
            <PageSubTitle>におい分析機器類</PageSubTitle>
            <p>揮発性成分用サンプリングシステムや、匂い成分の分析システムなどをご紹介しております。</p>
          </div>
          <div className="flex flex-col-reverse items-baseline ml-5">
            <Image src="/static/images/software/topimage2.jpg" height="62px" width="100px" priority />
          </div>
        </div>

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
  const Software2 = () => {
    return (
      <ul>
        {software2.map((software2) => {
          return (
            <li key={software2.id}>
              <div
                className="flex flex-col p-3 h-40 rounded"
                style={{ background: `center/cover no-repeat url(${software2.image.url})` }}
              >
                <Link href={`/product/software2/${software2.id}`}>
                  <a className="mb-3 font-bold">{software2.title}</a>
                </Link>
                <div className="overflow-scroll h-24">{software2.description}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <FluidLayout>
      <PageSEO title={`Product - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div>
        <div className="flex flex-row mb-6">
          <div>
            <PageSubTitle>ソフトウェア・ライブラリ</PageSubTitle>
            <p>使い勝手を確認したい方のためにトライアルソフトウェアもございます。</p>
          </div>
          <div className="flex flex-col-reverse items-baseline ml-5">
            <Image src="/static/images/software/topimage.jpg" height="62px" width="250px" priority />
          </div>
        </div>

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
          <li>
            <Software2 />
          </li>
        </ul>
      </div>
      <Sample />
      <Odor />
      <Other />
    </FluidLayout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "software" });
  const dataSoftware2 = await client.get({ endpoint: "software2" });
  const dataSample = await client.get({ endpoint: "sample" });
  const dataOdor = await client.get({ endpoint: "odor-analysis" });
  const dataOther = await client.get({ endpoint: "other-services" });

  return {
    props: {
      software: data.contents,
      software2: dataSoftware2.contents,
      sample: dataSample.contents,
      odor: dataOdor.contents,
      other: dataOther.contents,
    },
  };
};
