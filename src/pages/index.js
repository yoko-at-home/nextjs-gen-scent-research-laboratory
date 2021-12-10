import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

const Home = (props) => {
  return (
    <div
      style={{
        background: "top/cover no-repeat url('/static/images/home/background.jpg')",
      }}
      className="w-screen"
    >
      <FluidLayout>
        <PageSEO title={`ご挨拶 - ${siteMetadata.author}`} description={siteMetadata.description} />

        <div className="">
          <PageTitle>{props.data.title}</PageTitle>
          <div
            className="py-5 px-5 sm:text-lg md:py-10 lg:py-16 animation"
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
