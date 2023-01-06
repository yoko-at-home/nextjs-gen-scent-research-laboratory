import Link from "next/link";
import type { FC } from "react";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";
import type { BasicProps } from "src/types/pageType";

const Application: FC<BasicProps> = (props) => {
  return (
    <div
      className="absolute top-0 min-h-screen w-full bg-cover bg-top"
      style={{
        backgroundImage:
          "url('https://images.microcms-assets.io/assets/7e488163bae049938953f9f59d95f21d/c37f432f9f4f42c2880a06ed88b6f960/application-bg-gen.webp?w=2234')",
      }}
    >
      <div className="z-40 bg-white/80">
        <FluidLayout width="main">
          <PageSEO
            title={`Application - ${siteMetadata.title}`}
            description={siteMetadata.description}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl + `/application`}
          />
          <PageTitle> {/* <span className="tracking-wider text-[#2c4f54]">アプリケーション</span> */}</PageTitle>
          <div className="min-h-[60vh]">
            <ul>
              {props.data.map((item) => {
                return (
                  <li key={item.id}>
                    <div className="mb-5 flex flex-col font-extrabold">
                      <div className="flex flex-col justify-between">
                        <div className="mb-3 p-1 text-xl font-semibold text-[#2c4f54] sm:text-2xl sm:font-bold md:text-3xl">
                          {item.title}
                        </div>
                        <Link href={`/application/${item.id}`} passHref>
                          <a aria-label="Read more">
                            {!item.body ? null : (
                              <span className="ml-5 whitespace-nowrap bg-gray-300 bg-gradient-to-r p-2 hover:from-gray-300 hover:to-[#33CC33] hover:text-gray-100">
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
