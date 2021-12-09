import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

/* eslint-disable import/no-default-export */
const Application = (props) => {
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
            <PageTitle>{props.data.title}</PageTitle>
            <div
              className="py-5 px-5 text-lg md:py-10 lg:py-16 animation"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                __html: `${props.data.body}`,
              }}
            />
          </div>
        </FluidLayout>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "application",
  });

  return {
    props: {
      data,
    },
  };
};

export default Application;
