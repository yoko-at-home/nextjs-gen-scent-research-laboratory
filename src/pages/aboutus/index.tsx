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
    affiliate5: string;
    affiliate5_url: string;
    affiliate6: string;
    affiliate6_url: string;
    affiliate7: string;
    affiliate7_url: string;
    affiliate8: string;
    affiliate8_url: string;
    affiliate9: string;
    affiliate9_url: string;
    affiliate10: string;
    affiliate10_url: string;
    title: string;
  };
};

const AboutUs: NextPage<Props> = (props) => {
  return (
    <>
      <div
        className="absolute top-0 hidden min-h-screen w-full bg-cover bg-top text-white sm:block"
        style={{
          backgroundImage:
            "url('https://images.microcms-assets.io/assets/7e488163bae049938953f9f59d95f21d/aa5b535010b041a48156f6033a59822c/aboutus-background.webp?w=2234')",
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
            <h2 className="animation my-5 font-caribri font-bold sm:text-xl md:text-2xl lg:mb-10 lg:text-3xl">
              Gen-Scent Research Laboratory
            </h2>
            <span className="animation font-caribri font-bold sm:text-lg">{props.data.address}</span>
            <div className="animation container flex space-y-2 pb-8 pt-6 md:space-y-10">
              <span className="mr-5 whitespace-nowrap text-xl font-semibold">事業内容</span>
              <div className="">
                <p className="mb-3">{props.data.description1}</p>
                <p className="mb-3">{props.data.description2}</p>
              </div>
            </div>
            <div className="animation container flex space-y-2 pb-8 pt-6 md:space-y-10">
              <span className="mr-5 whitespace-nowrap text-xl font-semibold">所属団体</span>
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
                {props.data.affiliate5 === undefined ? null : (
                  <p className="mb-3">
                    <a href={props.data.affiliate5_url} target="_blank" rel="noopener noreferrer">
                      {props.data.affiliate5}
                    </a>
                  </p>
                )}
                {props.data.affiliate6 === undefined ? null : (
                  <p className="mb-3">
                    <a href={props.data.affiliate6_url} target="_blank" rel="noopener noreferrer">
                      {props.data.affiliate6}
                    </a>
                  </p>
                )}
                {props.data.affiliate7 === undefined ? null : (
                  <p className="mb-3">
                    <a href={props.data.affiliate7_url} target="_blank" rel="noopener noreferrer">
                      {props.data.affiliate7}
                    </a>
                  </p>
                )}
                {props.data.affiliate8 === undefined ? null : (
                  <p className="mb-3">
                    <a href={props.data.affiliate8_url} target="_blank" rel="noopener noreferrer">
                      {props.data.affiliate8}
                    </a>
                  </p>
                )}
                {props.data.affiliate9 === undefined ? null : (
                  <p className="mb-3">
                    <a href={props.data.affiliate9_url} target="_blank" rel="noopener noreferrer">
                      {props.data.affiliate9}
                    </a>
                  </p>
                )}
                {props.data.affiliate10 === undefined ? null : (
                  <p className="mb-3">
                    <a href={props.data.affiliate10_url} target="_blank" rel="noopener noreferrer">
                      {props.data.affiliate10}
                    </a>
                  </p>
                )}
              </div>
            </div>
            <div className="container flex-1">
              <div className="animation container flex space-y-2 pb-3 pt-40 md:space-y-10">
                <span className="whitespace-nowrap font-semibold">ロゴマークについて</span>
              </div>
              <div className="flex items-center">
                <div className="animation mx-6">
                  <Image src={"/static/images/logo.png"} alt="logo" width="80" height="80" />
                </div>
                <div className="animation text-sm font-thin">
                  玄川の家紋をデザイン化したものです。
                  <br />
                  ”日本の研究者にとって役に立つ製品や技術を提供していきたい”と願う
                  玄川ファミリーの思いが込められています。
                </div>
              </div>
            </div>
            <div className="animation container mt-3 text-left text-xs font-extralight text-gray-300">
              <sub>写真は明治38年に国内に渡来した月桂樹で、日比谷公園、青山霊園などに植樹されたうちの一株です。</sub>
            </div>
          </div>
        </FluidLayout>
      </div>
      <div
        className="absolute top-0 min-h-screen w-full bg-cover bg-top text-white sm:hidden"
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
            <h2 className="animation my-5 font-caribri font-bold sm:text-xl md:text-2xl lg:mb-10 lg:text-3xl">
              Gen-Scent Research Laboratory
            </h2>
            <span className="animation font-caribri font-bold sm:text-lg">{props.data.address}</span>
            <div className="animation container flex space-y-2 pb-8 pt-6 md:space-y-10">
              <span className="mr-5 whitespace-nowrap text-xl font-semibold">事業内容</span>
              <div className="">
                <p className="mb-3">{props.data.description1}</p>
                <p className="mb-3">{props.data.description2}</p>
              </div>
            </div>
            <div className="animation container flex space-y-2 pb-8 pt-6 md:space-y-10">
              <span className="mr-5 whitespace-nowrap text-xl font-semibold">所属団体</span>
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
              <div className="animation container flex space-y-2 pb-3 pt-40 md:space-y-10">
                <span className="whitespace-nowrap font-semibold">ロゴマークについて</span>
              </div>
              <div className="flex items-center">
                <div className="animation mx-6">
                  <Image src="/static/Logo-80.svg" alt="Gen-Scent Research Laboratoryロゴ" width={80} height={80} />
                </div>
                <div className="animation text-sm font-thin">
                  玄川の家紋をデザイン化したものです。
                  <br />
                  ”日本の研究者にとって役に立つ製品や技術を提供していきたい”と願う
                  玄川ファミリーの思いが込められています。
                </div>
              </div>
            </div>
            <div className="animation container mt-3 text-left text-xs font-extralight text-gray-300">
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
