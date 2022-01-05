import type { VFC } from "react";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";
import type { HomeProps } from "src/types/type";

const Home: VFC<HomeProps> = (props) => {
  return (
    <div className="background ">
      <div className="z-40 font-sans bg-white bg-opacity-80">
        <FluidLayout width="main">
          <PageSEO
            title={`Home - ${siteMetadata.title}`}
            description={siteMetadata.description}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl}
          />
          <div className="px-5 ">
            <PageTitle>{props.data.title}</PageTitle>
            <div
              className="leading-loose animation"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                __html: `${props.data.body}`,
              }}
            />
          </div>
        </FluidLayout>
      </div>
      <style jsx>
        {`
          .background {
            background-image: url("/static/images/home/background.jpg");
            object-fit: cover;
            background-size: cover;
            width: 100vw;
            min-height: 100vh;
          }
          @media (max-width: 639px) {
            .background {
              background-image: url("/static/images/home/background-mobile.jpg");
            }
          }
        `}
      </style>
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
