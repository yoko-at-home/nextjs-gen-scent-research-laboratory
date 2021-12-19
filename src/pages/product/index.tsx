/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/naming-convention*/
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageSubTitle, PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

type Props = {
  software: string;
  sample: string;
  odor: string;
  other: string;
  software2: string;
};

const Product: NextPage<Props> = (props: any) => {
  const Sample = () => {
    return (
      <div>
        <PageSubTitle>GC-MS備品・におい分析用製品・サンプル</PageSubTitle>
        <ul className="grid grid-cols-3 gap-4">
          {props.sample.map((item: any) => {
            return (
              <li key={item.id}>
                <div
                  className="flex p-1 h-40 rounded sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  {item.charm ? (
                    <div className="flex">
                      <div className="flex flex-col w-3/4">
                        <Link href={`/product/sample/${item.id}`}>
                          <a className="mb-3 text-sm font-semibold sm:text-base sm:font-bold">{item.title}</a>
                        </Link>
                        <div className="overflow-y-scroll">{item.description}</div>
                      </div>
                      <div className="w-12 sm:w-16 lg:20">
                        <img src={item.charm.url} alt="product" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <Link href={`/product/sample/${item.id}`}>
                        <a className="mb-3 text-sm font-semibold sm:text-base sm:font-bold">{item.title}</a>
                      </Link>
                      <div className="overflow-y-scroll">{item.description}</div>
                    </div>
                  )}
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
            <Image
              alt="揮発性成分用サンプリングシステム"
              src="/static/images/software/topimage2.jpg"
              height="62px"
              width="100px"
              priority
            />
          </div>
        </div>

        <ul className="grid grid-cols-3 gap-4">
          {props.odor.map((item: any) => {
            return (
              <li key={item.id}>
                <div
                  className="flex flex-col p-1 h-40 rounded sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  <Link href={`/product/odor-analysis/${item.id}`}>
                    <a className="mb-3 text-sm font-semibold sm:text-base sm:font-bold">{item.title}</a>
                  </Link>
                  <div className="overflow-hidden h-24 text-sm sm:text-base text-ellipsis">{item.description}</div>
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
          {props.other.map((item: any) => {
            return (
              <li key={item.id}>
                <div
                  className="flex flex-col p-1 h-40 rounded sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  <Link href={`/product/other-services/${item.id}`}>
                    <a className="mb-3 text-sm font-semibold sm:text-base sm:font-bold">{item.title}</a>
                  </Link>
                  <div className="overflow-hidden h-24 text-sm sm:text-base text-ellipsis">{item.description}</div>
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
        {props.software2.map((item: any) => {
          return (
            <li key={item.id}>
              <div
                className="flex flex-col p-1 h-40 rounded sm:p-3"
                style={{ background: `center/cover no-repeat url(${item.image.url})` }}
              >
                <Link href={`/product/software2/${item.id}`}>
                  <a className="mb-3 text-sm font-semibold sm:text-base sm:font-bold">{item.title}</a>
                </Link>
                <div className="overflow-y-scroll h-24 text-sm sm:text-base">{item.description}</div>
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
            <PageTitle>製品</PageTitle>
            <PageSubTitle>ソフトウェア・ライブラリ</PageSubTitle>
            <p>使い勝手を確認したい方のためにトライアルソフトウェアもございます。</p>
          </div>
          <div className="flex flex-col-reverse items-baseline ml-5">
            <Image
              alt="ソフトウェア・ライブラリ"
              src="/static/images/software/topimage.jpg"
              height="62px"
              width="250px"
              priority
            />
          </div>
        </div>

        <ul className="grid grid-cols-3 gap-4">
          {props.software.map((item: any) => {
            return (
              <li key={item.id}>
                <div
                  className="flex flex-col p-1 h-40 rounded sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  <Link href={`/product/software/${item.id}`}>
                    <a className="mb-3 text-sm font-semibold sm:text-base sm:font-bold">{item.title}</a>
                  </Link>
                  <div className="overflow-y-scroll h-24 text-sm sm:text-base">{item.description}</div>
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
};

export default Product;

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
