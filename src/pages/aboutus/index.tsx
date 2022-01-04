import type { NextPage } from "next";
import Image from "next/image";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { FluidLayout } from "src/layout";

import { siteMetadata } from "../../data/siteMetaData";

const AboutUs: NextPage = () => {
  return (
    <div
      // style={{
      //   background: "top/cover no-repeat url('/static/images/about/background.jpg')",
      // }}
      className="text-gray-300 background"
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
          <h2 className="my-5 font-caribri text-xl font-bold md:text-2xl lg:mb-10 lg:text-3xl animation">
            Gen-Scent Research Laboratory
          </h2>
          <span className="font-caribri text-lg font-bold animation">Shimomeguro, Meguro, Tokyo, Japan</span>
          <div className="container flex pt-6 pb-8 space-y-2 md:space-y-10 animation">
            <span className="mr-5 text-xl font-semibold whitespace-nowrap">事業内容</span>
            <div className="">
              <p>GC-MS 用ソフトウェア、データベース販売</p>
              <p>香り分析関連製品販売</p>
            </div>
          </div>
          {/* <div className="divide-y divide-gray-200"> */}
          <div className="container flex-1">
            <div className="container flex pt-40 pb-3 space-y-2 md:space-y-10 animation">
              <span className="font-semibold whitespace-nowrap">ロゴマークについて</span>
            </div>
            <div className="flex items-center">
              <div className="mx-6 animation">
                <Image src={"/static/images/logo.png"} alt="logo" width="80px" height="80px" />
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
        {/* </div> */}
      </FluidLayout>
      <style jsx>
        {`
          .background {
            background-image: url("/static/images/about/background.jpg");
            object-fit: cover;
            background-size: cover;
            width: 100vw;
            min-height: 100vh;
            background-position: center;
          }
          @media (max-width: 639px) {
            .background {
              background-image: url("/static/images/about/background-mobile.jpg");
              background-position: bottom;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;
