import type { NextPage } from "next";
import Image from "next/image";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

import { siteMetadata } from "../../data/siteMetaData";

type Props = {
  data: {
    address: string;
    description1: string;
    description2: string;
    affiliate1: string;
    affiliate1_url: string;
    affiliate2: string;
    affiliate2_url: string;
    affiliate3: string;
    affiliate3_url: string;
    affiliate4: string;
    affiliate4_url: string;
    title: string;
  };
};

const AboutUs: NextPage<Props> = (props) => {
  return (
    <>
      <div
        className="hidden absolute top-0 w-full min-h-screen text-white bg-top bg-cover sm:block"
        style={{
          backgroundImage:
            "url('https://images.microcms-assets.io/assets/7e488163bae049938953f9f59d95f21d/fdc37910136b4a3b9592554ae91d18ac/aboutus-background.jpg?w=2600')",
        }}
      >
        <FluidLayout width="main">
          <PageSEO
            title={`About Us - ${siteMetadata.title}`}
            description={siteMetadata.description}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl + `/aboutus`}
          />
          <div className="flex flex-col justify-between">
            <PageTitle>
              <span className="font-yui text-3xl tracking-widest sm:text-5xl">玄川リサーチ</span>
            </PageTitle>
            <h2 className="my-5 font-caribri font-bold sm:text-xl md:text-2xl lg:mb-10 lg:text-3xl animation">
              Gen-Scent Research Laboratory
            </h2>
            <span className="font-caribri font-bold sm:text-lg animation">{props.data.address}</span>
            <div className="container flex pt-6 pb-8 space-y-2 md:space-y-10 animation">
              <span className="mr-5 text-xl font-semibold whitespace-nowrap">事業内容</span>
              <div className="">
                <p className="mb-3">{props.data.description1}</p>
                <p className="mb-3">{props.data.description2}</p>
              </div>
            </div>
            <div className="container flex pt-6 pb-8 space-y-2 md:space-y-10 animation">
              <span className="mr-5 text-xl font-semibold whitespace-nowrap">所属団体</span>
              <div className="">
                <p className="mb-3">
                  <a href={props.data.affiliate1_url} target="_blank" rel="noopener noreferrer">
                    {props.data.affiliate1}
                  </a>
                </p>
                <p className="mb-3">
                  <a href={props.data.affiliate2_url} target="_blank" rel="noopener noreferrer">
                    {props.data.affiliate2}
                  </a>
                </p>
                <p className="mb-3">
                  <a href={props.data.affiliate3_url} target="_blank" rel="noopener noreferrer">
                    {props.data.affiliate3}
                  </a>
                </p>
                <p className="mb-3">
                  <a href={props.data.affiliate4_url} target="_blank" rel="noopener noreferrer">
                    {props.data.affiliate4}
                  </a>
                </p>
              </div>
            </div>
            <div className="container flex-1">
              <div className="container flex pt-40 pb-3 space-y-2 md:space-y-10 animation">
                <span className="font-semibold whitespace-nowrap">ロゴマークについて</span>
              </div>
              <div className="flex items-center">
                <div className="mx-6 animation">
                  <Image src={"/static/images/logo.png"} alt="logo" width="80" height="80" />
                </div>
                <div className="text-sm font-thin animation">
                  玄川の家紋をデザイン化したものです。
                  <br />
                  ”日本の研究者にとって役に立つ製品や技術を提供していきたい”と願う
                  玄川ファミリーの思いが込められています。
                </div>
              </div>
            </div>
            <div className="container mt-3 text-xs font-extralight text-left text-gray-300 animation">
              <sub>写真は明治38年に国内に渡来した月桂樹で、日比谷公園、青山霊園などに植樹されたうちの一株です。</sub>
            </div>
          </div>
        </FluidLayout>
      </div>
      <div
        className="absolute top-0 w-full min-h-screen text-white bg-top bg-cover sm:hidden"
        style={{
          backgroundImage: "url('/static/images/header/background-mobile.webp')",
        }}
      >
        <FluidLayout width="main">
          <PageSEO
            title={`About Us - ${siteMetadata.title}`}
            description={siteMetadata.description}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl}
          />
          <div className="flex flex-col justify-between">
            <PageTitle>
              <span className="font-yui text-3xl tracking-widest sm:text-5xl">玄川リサーチ</span>
            </PageTitle>
            <h2 className="my-5 font-caribri font-bold sm:text-xl md:text-2xl lg:mb-10 lg:text-3xl animation">
              Gen-Scent Research Laboratory
            </h2>
            <span className="font-caribri font-bold sm:text-lg animation">{props.data.address}</span>
            <div className="container flex pt-6 pb-8 space-y-2 md:space-y-10 animation">
              <span className="mr-5 text-xl font-semibold whitespace-nowrap">事業内容</span>
              <div className="">
                <p className="mb-3">{props.data.description1}</p>
                <p className="mb-3">{props.data.description2}</p>
              </div>
            </div>
            <div className="container flex pt-6 pb-8 space-y-2 md:space-y-10 animation">
              <span className="mr-5 text-xl font-semibold whitespace-nowrap">所属団体</span>
              <div className="">
                <p className="mb-3">
                  <a href={props.data.affiliate1_url} target="_blank" rel="noopener noreferrer">
                    {props.data.affiliate1}
                  </a>
                </p>
                <p className="mb-3">
                  <a href={props.data.affiliate2_url} target="_blank" rel="noopener noreferrer">
                    {props.data.affiliate2}
                  </a>
                </p>
                <p className="mb-3">
                  <a href={props.data.affiliate3_url} target="_blank" rel="noopener noreferrer">
                    {props.data.affiliate3}
                  </a>
                </p>
                <p className="mb-3">
                  <a href={props.data.affiliate4_url} target="_blank" rel="noopener noreferrer">
                    {props.data.affiliate4}
                  </a>
                </p>
              </div>
            </div>
            <div className="container flex-1">
              <div className="container flex pt-40 pb-3 space-y-2 md:space-y-10 animation">
                <span className="font-semibold whitespace-nowrap">ロゴマークについて</span>
              </div>
              <div className="flex items-center">
                <div className="mx-6 animation">
                  <Image src="/static/Logo-80.svg" alt="Gen-Scent Research Laboratoryロゴ" width={80} height={80} />
                </div>
                <div className="text-sm font-thin animation">
                  玄川の家紋をデザイン化したものです。
                  <br />
                  ”日本の研究者にとって役に立つ製品や技術を提供していきたい”と願う
                  玄川ファミリーの思いが込められています。
                </div>
              </div>
            </div>
            <div className="container mt-3 text-xs font-extralight text-left text-gray-300 animation">
              <sub>写真は明治38年に国内に渡来した月桂樹で、日比谷公園、青山霊園などに植樹されたうちの一株です。</sub>
            </div>
          </div>
        </FluidLayout>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "aboutus",
  });

  return {
    props: {
      data,
    },
  };
};
export default AboutUs;
