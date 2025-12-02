import Image from "next/image";
import Link from "next/link";
// import ImageSoftwareLibrary from "public//static/images/software/topimage.jpg";
// import ImageSampling from "public/static/images/software/sampling.jpg";
import type { FC } from "react";
import { PageSubTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import type { ProductProps } from "src/types/pageType";

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

const Software2: FC<ProductProps> = (props) => {
  return (
    <ul>
      {props.software2.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/product/software2/${item.id}`} aria-label="Read more">
              <div
                className="flex h-36 rounded p-1 hover:scale-[0.99] hover:opacity-90 sm:p-3"
                style={{ background: `center/cover no-repeat url(${item.image.url})` }}
              >
                <div className="flex w-full flex-col px-2 pt-2">
                  <div className="mb-2 font-bold leading-tight">
                    {!item.title ? null : item.title}
                    {!item.subtitle ? null : <div>{item.subtitle}</div>}
                    {!item.product_title ? <div className="mt-1" /> : <div>{item.product_title}</div>}
                  </div>
                  <div className="line-clamp-4 text-ellipsis text-sm">{item.description}</div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Sample: FC<ProductProps> = (props) => {
  return (
    <div>
      <PageSubTitle fontWeight="bold">{productTitles[1].title}</PageSubTitle>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">
        {props.sample.map((item) => {
          return (
            <li key={item.id}>
              <div
                className="flex h-36 rounded p-1 hover:scale-[0.99] hover:opacity-90 sm:p-3"
                style={{ background: `center/cover no-repeat url(${item.image.url})` }}
              >
                {item.charm ? (
                  <div className="flex">
                    <div className="flex w-3/4 flex-col p-2">
                      <Link href={`/product/sample/${item.id}`} className="mb-2 font-bold leading-tight">
                        {!item.title ? null : item.title}
                        {!item.product_title ? <div className="mt-1" /> : <div>{item.product_title}</div>}
                      </Link>
                      <div className="line-clamp-4 text-ellipsis text-sm">
                        <Link href={`/product/sample/${item.id}`} aria-label="Read more">
                          {item.description}
                        </Link>
                      </div>
                    </div>
                    <Link href={`/product/sample/${item.id}`} className="mb-2 font-bold leading-tight">
                      <Image src={item.charm.url} alt="product" width="90" height="140" />
                    </Link>
                  </div>
                ) : (
                  <Link href={`/product/sample/${item.id}`} aria-label="Read more">
                    <div className="flex w-full flex-col px-2 pt-2">
                      <div className="mb-2 font-bold leading-tight">
                        {!item.title ? null : item.title}
                        {!item.product_title ? <div className="mt-1" /> : <div>{item.product_title}</div>}
                      </div>
                      <div className="line-clamp-4 text-ellipsis text-sm">
                        <div>{item.description}</div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Odor: FC<ProductProps> = (props) => {
  return (
    <div>
      <div className="mb-6 flex flex-row">
        <div>
          <PageSubTitle fontWeight="bold">{productTitles[2].title}</PageSubTitle>
          <div>{productTitles[2].description}</div>
        </div>
        <div className="ml-5 flex flex-col-reverse items-baseline px-1 sm:px-2 md:p-3">
          {/* <Image alt="揮発性成分用サンプリングシステム" src={ImageSampling} width="62" height="100" /> */}
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">
        {props.odor.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/product/odor-analysis/${item.id}`} aria-label="Read more">
                <div
                  className="flex h-36 rounded p-1 hover:scale-[0.99] hover:opacity-90 sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  <div className="flex w-full flex-col px-2 pt-2">
                    <div className="mb-2 font-bold leading-tight">{item.title}</div>
                    <div className="line-clamp-4 text-ellipsis text-sm">{item.description}</div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Other: FC<ProductProps> = (props) => {
  return (
    <div>
      <PageSubTitle fontWeight="bold">{productTitles[3].title}</PageSubTitle>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">
        {props.other.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/product/other-services/${item.id}`} aria-label="Read more">
                <div
                  className="flex h-36 rounded p-1 hover:scale-[0.99] hover:opacity-90 sm:p-3"
                  style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                >
                  <div className="flex w-full flex-col px-2 pt-2">
                    <div className="mb-2 font-bold leading-tight">{item.title}</div>
                    <div className="line-clamp-4 text-ellipsis text-sm">
                      <div>
                        {item.description}
                        <br />
                        {item.note}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Product: FC<ProductProps> = (props) => {
  return (
    <FluidLayout width="product">
      <PageSEO
        title={`Product - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
        siteUrl={`${siteMetadata.siteUrl}/product`}
      />
      <div>
        <div className="mb-6 flex flex-row">
          <div>
            {/* <PageTitle>製品</PageTitle> */}
            <PageSubTitle fontWeight="bold">{productTitles[0].title}</PageSubTitle>
            <div>{productTitles[0].description}</div>
          </div>
          <div className="ml-5 flex flex-col-reverse items-baseline px-1 sm:px-2 md:p-3">
            {/* <Image alt="ソフトウェア・ライブラリ" src={ImageSoftwareLibrary} width={250} height={100} /> */}
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">
          {props.software.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/product/software/${item.id}`} aria-label="Read more">
                  <div
                    className="flex h-36 rounded p-1 hover:scale-[0.99] hover:opacity-90 sm:p-3"
                    style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                  >
                    <div className="flex w-full flex-col px-2 pt-2">
                      <div className="mb-2 font-bold leading-tight">
                        {!item.title ? null : item.title}
                        {!item.subtitle ? null : <div>{item.subtitle}</div>}
                        {!item.product_title ? <div className="mt-1" /> : <div>{item.product_title}</div>}
                      </div>
                      <div className="line-clamp-4 text-ellipsis text-sm">
                        <div>{item.description}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
          <li>
            <Software2 {...props} /> {/* propsを渡す */}
          </li>
        </ul>
      </div>
      <Sample {...props} /> {/* propsを渡す */}
      <Odor {...props} /> {/* propsを渡す */}
      <Other {...props} /> {/* propsを渡す */}
    </FluidLayout>
  );
};

export default Product;

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const { client } = await import("src/lib/client"); // clientのインポートをここに移動
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
