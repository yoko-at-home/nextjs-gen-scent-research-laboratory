import type { NextPage } from "next";
import Link from "next/link";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

/* eslint-disable import/no-default-export */
const Application: NextPage = (props: any) => {
  return (
    <div
      // style={{
      //   background: "top/cover no-repeat url('/static/images/application/gen.jpg')",
      // }}
      className="z-10 background"
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
          <PageTitle>{/* <span className="tracking-wider text-[#33CC33]">アプリケーション</span> */}</PageTitle>
          <ul>
            {props.application.map((item: any) => {
              return (
                <li key={item.id}>
                  <div className="flex flex-col p-5 mb-5 font-extrabold">
                    <div className="flex justify-between items-end text-[#33CC33]">
                      <div className="p-1 mb-3 text-3xl font-semibold sm:text-2xl sm:font-bold md:text-3xl">
                        {item.title}
                      </div>
                      <Link href={`/application/${item.id}`} passHref>
                        <a aria-label="Read more">
                          {item.body === undefined ? null : (
                            <span className="p-2 ml-5 hover:text-gray-100 whitespace-nowrap bg-gray-300 bg-gradient-to-r hover:from-gray-300 hover:to-[#33CC33]">
                              詳細
                            </span>
                          )}
                        </a>
                      </Link>
                    </div>
                    <div className="text-sm text-[#33CC33] sm:text-base">{item.description}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </FluidLayout>
      </div>
      <style jsx>
        {`
          .background {
            background-image: url("/static/images/application/gen.jpg");
            object-fit: cover;
            background-size: cover;
            width: 100vw;
            min-height: 100vh;
            background-position: center;
          }
          @media (max-width: 639px) {
            .background {
              background-image: url("/static/images/application/gen-mobile.jpg");
              background-position: bottom;
            }
          }
        `}
      </style>
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
      application: data.contents,
    },
  };
};
