import Link from "next/link";
import type { VFC } from "react";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";
import type { BasicProps } from "src/types/pageType";

const Application: VFC<BasicProps> = (props) => {
  return (
    <div
      className="absolute top-0 w-full min-h-screen bg-top bg-cover"
      style={{
        backgroundImage: "url('/static/images/application/gen.webp')",
      }}
    >
      <div className="z-40 bg-white bg-opacity-80">
        <FluidLayout width="main">
          <PageSEO
            title={`Application - ${siteMetadata.title}`}
            description={siteMetadata.description}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl}
          />
          <PageTitle> {/* <span className="tracking-wider text-[#2c4f54]">アプリケーション</span> */}</PageTitle>
          <div className="min-h-[60vh]">
            <ul>
              {props.data.map((item) => {
                return (
                  <li key={item.id}>
                    <div className="flex flex-col mb-5 font-extrabold">
                      <div className="flex flex-col justify-between">
                        <div className="p-1 mb-3 text-xl font-semibold text-[#2c4f54] sm:text-2xl sm:font-bold md:text-3xl">
                          {item.title}
                        </div>
                        <Link href={`/application/${item.id}`} passHref>
                          <a aria-label="Read more">
                            {!item.body ? null : (
                              <span className="p-2 ml-5 hover:text-gray-100 whitespace-nowrap bg-gray-300 bg-gradient-to-r hover:from-gray-300 hover:to-[#33CC33]">
                                詳細
                              </span>
                            )}
                          </a>
                        </Link>
                      </div>
                      <div className="text-sm text-[#2c4f54] sm:text-base">{item.description}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </FluidLayout>
      </div>
    </div>
  );
};

export default Application;

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "application",
  });

  return {
    props: {
      data: data.contents,
    },
  };
};
