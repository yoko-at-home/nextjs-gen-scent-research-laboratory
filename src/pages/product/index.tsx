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
  className: string;
  productType: "software" | "software2" | "sample" | "odor" | "other";
};

const productTitles = [
  {
    id: 0,
    title: "ソフトウェア・ライブラリ",
    description: "使い勝手を確認したい方のためにトライアルソフトウェアもございます。",
  },
  {
    id: 1,
    title: "GC-MS備品・におい分析用製品・サンプル",
    description: "",
  },
  {
    id: 2,
    title: "におい分析機器類",
    description: "揮発性成分用サンプリングシステムや、匂い成分の分析システムなどをご紹介しております。",
  },
  {
    id: 3,
    title: "他サービス",
    description: "",
  },
];

const Product: NextPage<Props> = (props: any) => {
  const Sample = () => {
    return (
      <div>
        <PageSubTitle>{productTitles[1].title}</PageSubTitle>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-3 lg:grid-cols-3">
          {props.sample.map((item: any) => {
            return (
              <li key={item.id}>
                <div
                  className="flex p-1 h-44 rounded hover:opacity-80 hover:scale-[0.99] sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  {item.charm ? (
                    <div className="flex">
                      <div className="flex flex-col p-3 w-3/4">
                        <Link href={`/product/sample/${item.id}`}>
                          <a className="font-bold xl:mb-1 xl:text-lg">
                            {item.title}
                            <br />
                            {!undefined ? item.subtitle : null}
                            <br />
                            {!undefined ? item.product_title : null}
                          </a>
                        </Link>
                        <div className="overflow-hidden text-sm text-ellipsis">
                          <Link href={`/product/sample/${item.id}`}>
                            <a>{item.description}</a>
                          </Link>
                        </div>
                      </div>
                      <div className="w-20">
                        <Image src={item.charm.url} alt="product" width={`100%`} height="140px" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col px-3 pt-3 w-full">
                      <Link href={`/product/sample/${item.id}`}>
                        <a className="font-bold xl:mb-1 xl:text-lg">
                          {item.title}
                          {undefined ? null : (
                            <span>
                              <br />
                              {item.subtitle}
                            </span>
                          )}
                          {undefined ? null : (
                            <span>
                              <br />
                              {item.product_title}
                            </span>
                          )}
                        </a>
                      </Link>
                      <div className="overflow-hidden text-sm text-ellipsis">
                        <Link href={`/product/sample/${item.id}`}>
                          <a>{item.description}</a>
                        </Link>
                      </div>
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
            <PageSubTitle>{productTitles[2].title}</PageSubTitle>
            <p>{productTitles[2].description}</p>
          </div>
          <div className="flex flex-col-reverse items-baseline px-1 ml-5 sm:px-2 md:p-3-reverse">
            <Image
              alt="揮発性成分用サンプリングシステム"
              src="/static/images/software/topimage2.jpg"
              height="62px"
              width={`100%`}
              priority
            />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-3 lg:grid-cols-3">
          {props.odor.map((item: any) => {
            return (
              <li key={item.id}>
                <div
                  className="flex p-1 h-44 rounded hover:opacity-80 hover:scale-[0.99] sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  {item.charm ? (
                    <div className="flex">
                      <div className="flex flex-col p-3 w-3/4">
                        <Link href={`/product/odor-analysis/${item.id}`}>
                          <a className="font-bold xl:mb-1 xl:text-lg">
                            {item.title}
                            {undefined ? null : (
                              <span>
                                <br />
                                {item.subtitle}
                              </span>
                            )}
                            {undefined ? null : (
                              <span>
                                <br />
                                {item.product_title}
                              </span>
                            )}
                          </a>
                        </Link>
                        <div className="overflow-hidden text-sm text-ellipsis">
                          <Link href={`/product/odor-analysis/${item.id}`}>
                            <a>{item.description}</a>
                          </Link>
                        </div>
                      </div>
                      <div className="w-20">
                        <Image src={item.charm.url} alt="product" width={`100%`} height="140px" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col px-3 pt-3 w-full">
                      <Link href={`/product/odor-analysis/${item.id}`}>
                        <a className="font-bold xl:mb-1 xl:text-lg">
                          {item.title}
                          {undefined ? null : (
                            <span>
                              <br />
                              {item.subtitle}
                            </span>
                          )}
                          {undefined ? null : (
                            <span>
                              <br />
                              {item.product_title}
                            </span>
                          )}
                        </a>
                      </Link>
                      <div className="overflow-hidden text-sm text-ellipsis">
                        <Link href={`/product/odor-analysis/${item.id}`}>
                          <a>{item.description}</a>
                        </Link>
                      </div>
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
  const Other = () => {
    return (
      <div>
        <PageSubTitle>{productTitles[3].title}</PageSubTitle>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-3 lg:grid-cols-3">
          {props.other.map((item: any) => {
            return (
              <li key={item.id}>
                <div
                  className="flex p-1 h-44 rounded hover:opacity-80 hover:scale-[0.99] sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  {item.charm ? (
                    <div className="flex">
                      <div className="flex flex-col p-3 w-3/4">
                        <Link href={`/product/other-services/${item.id}`}>
                          <a className="font-bold xl:mb-1 xl:text-lg">
                            {item.title}
                            <br />
                            {!undefined ? item.subtitle : null}
                            <br />
                            {!undefined ? item.product_title : null}
                          </a>
                        </Link>
                        <div className="overflow-hidden text-sm text-ellipsis">
                          <Link href={`/product/other-services/${item.id}`}>
                            <a>{item.description}</a>
                          </Link>
                        </div>
                      </div>
                      <div className="w-20">
                        <Image src={item.charm.url} alt="product" width={`100%`} height="140px" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col px-3 pt-3 w-full">
                      <Link href={`/product/other-services/${item.id}`}>
                        <a className="font-bold xl:mb-1 xl:text-lg">
                          {item.title}
                          {undefined ? null : (
                            <span>
                              <br />
                              {item.subtitle}
                            </span>
                          )}
                          {undefined ? null : (
                            <span>
                              <br />
                              {item.product_title}
                            </span>
                          )}
                        </a>
                      </Link>
                      <div className="overflow-hidden text-sm text-ellipsis">
                        <Link href={`/product/other-services/${item.id}`}>
                          <a>{item.description}</a>
                        </Link>
                      </div>
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
  const Software2 = () => {
    return (
      <ul>
        {props.software2.map((item: any) => {
          return (
            <li key={item.id}>
              <div
                className="flex p-1 h-44 rounded hover:opacity-80 hover:scale-[0.99] sm:p-3"
                style={{ background: `center/cover no-repeat url(${item.image.url})` }}
              >
                {item.charm ? (
                  <div className="flex">
                    <div className="flex flex-col p-3 w-3/4">
                      <Link href={`/product/software2/${item.id}`}>
                        <a className="font-bold xl:mb-1 xl:text-lg">
                          {item.title}
                          {undefined ? null : (
                            <span>
                              <br />
                              {item.subtitle}
                            </span>
                          )}
                          {undefined ? null : (
                            <span>
                              <br />
                              {item.product_title}
                            </span>
                          )}
                        </a>
                      </Link>
                      <div className="overflow-hidden text-sm text-ellipsis">{item.description}</div>
                    </div>
                    <div className="w-20">
                      <Image src={item.charm.url} alt="product" width={`100%`} height="140px" />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col px-3 pt-3 w-full">
                    <Link href={`/product/software2/${item.id}`}>
                      <a className="font-bold xl:mb-1 xl:text-lg">
                        {item.title}
                        {undefined ? null : (
                          <span>
                            <br />
                            {item.subtitle}
                          </span>
                        )}
                        {undefined ? null : (
                          <span>
                            <br />
                            {item.product_title}
                          </span>
                        )}
                      </a>
                    </Link>
                    <div className="overflow-hidden text-sm text-ellipsis">{item.description}</div>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <FluidLayout width="product">
      <PageSEO
        title={`Product - ${siteMetadata.author}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />

      <div>
        <div className="flex flex-row mb-6">
          <div>
            <PageTitle>製品</PageTitle>
            <PageSubTitle>{productTitles[0].title}</PageSubTitle>
            <p>{productTitles[0].description}</p>
          </div>
          <div className="flex flex-col-reverse items-baseline px-1 ml-5 sm:px-2 md:p-3-reverse">
            <Image
              alt="ソフトウェア・ライブラリ"
              src="/static/images/software/topimage.jpg"
              height="62px"
              width="250px"
              priority
            />
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-3 lg:grid-cols-3">
          {props.software.map((item: any) => {
            return (
              <li key={item.id}>
                <div
                  className="flex p-1 h-44 rounded hover:opacity-80 hover:scale-[0.99] sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  {item.charm ? (
                    <div className="flex">
                      <div className="flex flex-col p-3 w-3/4">
                        <Link href={`/product/software/${item.id}`}>
                          <a className="font-bold xl:mb-1 xl:text-lg">
                            {item.title}
                            {undefined ? null : (
                              <span>
                                <br />
                                {item.subtitle}
                              </span>
                            )}
                            {undefined ? null : (
                              <span>
                                <br />
                                {item.product_title}
                              </span>
                            )}
                          </a>
                        </Link>
                        <div className="overflow-hidden text-sm text-ellipsis">
                          <Link href={`/product/software/${item.id}`}>
                            <a>{item.description}</a>
                          </Link>
                        </div>
                      </div>
                      <div className="w-20">
                        <Image src={item.charm.url} alt="product" width={`100%`} height="140px" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col px-3 pt-3 w-full">
                      <Link href={`/product/software/${item.id}`}>
                        <a className="font-bold xl:mb-1 xl:text-lg">
                          {item.title}
                          <br />
                          {item.subtitle}
                          <br />
                          {item.product_title}
                        </a>
                      </Link>
                      <div className="overflow-hidden text-sm text-ellipsis">
                        <Link href={`/product/software/${item.id}`}>
                          <a>{item.description}</a>
                        </Link>
                      </div>
                    </div>
                  )}
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
