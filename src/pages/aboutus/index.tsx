import type { NextPage } from "next";
import Image from "next/image";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { FluidLayout } from "src/layout";

import { siteMetadata } from "../../data/siteMetaData";

const AboutUs: NextPage = () => {
  return (
    <div
      style={{
        background: "bottom/cover no-repeat url('/static/images/about/background.jpg')",
      }}
      className="text-gray-300"
    >
      <FluidLayout>
        <PageSEO title={`About Us - ${siteMetadata.author}`} description={siteMetadata.description} />
        <div className="flex flex-col justify-between">
          <PageTitle>
            <span className="animation">玄川リサーチ</span>
          </PageTitle>
          <h2 className="my-5 text-xl font-semibold md:text-2xl lg:mb-10 lg:text-3xl animation">
            Gen-Scent Research Laboratory
          </h2>
          <span className="text-lg animation">Shimomeguro, Meguro, Tokyo, Japan</span>
          <div className="container flex pt-6 pb-8 space-y-2 md:space-y-10 animation">
            <span className="mr-5 text-xl font-semibold whitespace-nowrap">事業内容</span>
            <div className="">
              <p>GC-MS[用ソフトウェア、データベース販売</p>
              <p>香り分析関連製品販売</p>
            </div>
          </div>
          {/* <div className="divide-y divide-gray-200"> */}
          <div className="container flex-1">
            <div className="container flex pt-6 pb-8 space-y-2 md:space-y-10 animation">
              <span className="mr-5 text-xl font-semibold whitespace-nowrap">ロゴマークについて</span>
            </div>
            <div className="flex">
              <div className="mx-6 animation">
                <Image src={"/static/images/logo.png"} alt="logo" width="100px" height="100px" />
              </div>
              <div className="animation">
                玄川の家紋をデザイン化したものです。
                <br />
                ”日本の研究者にとって役に立つ製品や技術を提供していきたい”と願う
                玄川ファミリーの思いが込められています。
              </div>
            </div>
          </div>
          <div className="container mt-20 text-left text-gray-100 sm:mt-16 animation">
            写真は明治38年に国内に渡来した月桂樹で、日比谷公園、青山霊園などに植樹されたうちの一株です。
          </div>
        </div>
        {/* </div> */}
      </FluidLayout>
    </div>
  );
};

export default AboutUs;
