import type { VFC } from "react";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";
import type { HomeProps } from "src/types/type";

const Home: VFC<HomeProps> = (props) => {
  return (
    <div
      className="absolute top-0 w-full min-h-screen bg-top bg-cover"
      style={{
        backgroundImage: "url('/static/images/home/background.jpg')",
      }}
    >
      <div className="z-40 bg-white bg-opacity-80">
        <FluidLayout width="main">
          <PageSEO
            title={`${siteMetadata.title}`}
            description={siteMetadata.description}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl}
          />
          <PageTitle>{props.data.title}</PageTitle>
          <div
            className="mb-12 leading-loose sm:mb-20 animation"
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
