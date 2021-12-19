import type { NextPage } from "next";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

type Props = {
  data: string;
};

const Home: NextPage<Props> = (props: any) => {
  return (
    <div
      style={{
        background: "top/cover no-repeat url('/static/images/home/background.jpg')",
      }}
    >
      <FluidLayout>
        <PageSEO title={`Greeting - ${siteMetadata.author}`} description={siteMetadata.description} />

        <div className="">
          <PageTitle>
            <span className="tracking-widest">{props.data.title}</span>
          </PageTitle>
          <div
            className="py-5 px-5 leading-loose sm:text-lg md:py-10 lg:py-16 animation"
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line @typescript-eslint/naming-convention
              __html: `${props.data.body}`,
            }}
          />
        </div>
      </FluidLayout>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "home",
  });

  return {
    props: {
      data,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default Home;
