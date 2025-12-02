import parse from "html-react-parser";
import type { FC } from "react";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";
import type { BasicObjectProps } from "src/types/pageType";

const Home: FC<BasicObjectProps> = (props) => {
  return (
    <div
      className="absolute top-0 min-h-screen w-full bg-cover bg-top"
      style={{
        backgroundImage:
          "url('https://images.microcms-assets.io/assets/7e488163bae049938953f9f59d95f21d/1101535894b042978b00b2ed8858b362/home-background.webp?w=2234')",
      }}
    >
      <div className="z-40 bg-white/80 text-zinc-700">
        <FluidLayout width="main">
          <PageSEO
            title={`${siteMetadata.title}`}
            description={siteMetadata.description}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl}
          />
          <PageTitle>{props.data.title}</PageTitle>
          <div className="animation mb-12 leading-loose sm:mb-20">
            {props.data.body ? parse(props.data.body) : null}
          </div>
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
