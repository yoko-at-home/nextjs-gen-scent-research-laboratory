import Link from "next/link";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

export default function News({ news }) {
  return (
    <FluidLayout>
      <PageSEO title={`News - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="">
        <PageTitle>最新情報</PageTitle>
      </div>
      <ul>
        {news.map((item) => {
          return (
            <li key={item.id}>
              <div
                className="flex flex-col p-8 mb-10 bg-gray-200 bg-opacity-50 rounded sm:p-3"
                // style={{ background: `center/cover no-repeat url(${item.image.url})` }}
              >
                <div className="mb-3 text-xl font-semibold sm:font-bold">{item.title}</div>
                <div className="flex flex-row-reverse justify-between items-end">
                  <Link href={`/news/${item.id}`} passHref>
                    <a>
                      {item.body === undefined ? null : (
                        <span className="p-2 ml-5 text-gray-700 whitespace-nowrap bg-gray-300">詳細</span>
                      )}
                    </a>
                  </Link>
                  <div className="overflow-scroll text-sm sm:text-base">{item.description}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </FluidLayout>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "news",
  });

  return {
    props: {
      news: data.contents,
    },
  };
};
