import Link from "next/link";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

/* eslint-disable import/no-default-export */
export default function Application({ application }) {
  return (
    <div
      style={{
        background: "center/cover no-repeat url('/static/images/coming-soon.jpg')",
      }}
      className="z-10"
    >
      <div className="z-40 bg-white bg-opacity-70">
        <FluidLayout>
          <PageSEO title={`Application - ${siteMetadata.author}`} description={siteMetadata.description} />
          <div className="">
            <PageTitle>アプリケーション</PageTitle>
          </div>
          <ul>
            {application.map((item) => {
              return (
                <li key={item.id}>
                  <div
                    className="flex flex-col p-5 mb-5 bg-white bg-opacity-50 rounded sm:p-3"
                    // style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                  >
                    <div className="flex justify-between items-end">
                      <div className="mb-3 font-semibold sm:font-bold">{item.title}</div>
                      <Link href={`/application/${item.id}`} passHref>
                        <a>
                          {item.body === undefined ? null : (
                            <span className="p-2 ml-5 text-gray-700 whitespace-nowrap bg-gray-300">詳細</span>
                          )}
                        </a>
                      </Link>
                    </div>
                    <div className="overflow-scroll text-sm sm:text-base">{item.description}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </FluidLayout>
      </div>
    </div>
  );
}

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
