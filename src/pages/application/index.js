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
        background: "center/cover no-repeat url('/static/images/application/gen.jpg')",
      }}
      className="z-10 font-extrabold text-green-900"
    >
      <div className="z-40 bg-white bg-opacity-20">
        <FluidLayout>
          <PageSEO title={`Application - ${siteMetadata.author}`} description={siteMetadata.description} />
          <div className="">
            <PageTitle>
              <span className="tracking-wider text-emerald-900">アプリケーション</span>
            </PageTitle>
          </div>
          <ul>
            {application.map((item) => {
              return (
                <li key={item.id}>
                  <div
                    className="flex flex-col p-5 mb-5 bg-white bg-opacity-80 rounded sm:p-3"
                    // style={{ background: `center/cover no-repeat url(${item.image.url})` }}
                  >
                    <div className="flex justify-between items-end">
                      <div className="p-1 mb-3 font-semibold sm:font-bold">{item.title}</div>
                      <Link href={`/application/${item.id}`} passHref>
                        <a>
                          {item.body === undefined ? null : (
                            <span className="p-2 ml-5 text-gray-700 hover:text-gray-100 whitespace-nowrap bg-gray-300 bg-gradient-to-r hover:from-gray-300 hover:to-emerald-700">
                              詳細
                            </span>
                          )}
                        </a>
                      </Link>
                    </div>
                    <div className="text-sm sm:text-base">{item.description}</div>
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
