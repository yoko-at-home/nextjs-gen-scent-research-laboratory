import type { NextPage } from "next";
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
        background: "center/cover no-repeat url('/static/images/home/background.jpg')",
      }}
    >
      <div className="z-40 font-sans bg-white bg-opacity-80">
        <FluidLayout width="main">
          <PageSEO
            title={`Greeting - ${siteMetadata.author}`}
            description={siteMetadata.description}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl}
          />

          <div
            className="py-5 px-5 leading-loose md:py-8 lg:py-12 animation"
            dangerouslySetInnerHTML={{
              // eslint-disable-next-line @typescript-eslint/naming-convention
              __html: `${props.data.body}`,
            }}
          />
        </FluidLayout>
      </div>
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
