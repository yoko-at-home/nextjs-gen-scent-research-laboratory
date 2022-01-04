import type { NextPage } from "next";
import type { ReactNode } from "react";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

type Props = {
  children?: ReactNode;
  data: string;
};

const Private: NextPage<Props> = (props: any) => {
  return (
    <FluidLayout width="main">
      <PageSEO
        title={`個人情報保護方針 - ${siteMetadata.title}`}
        description={siteMetadata.description}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <div className="divide-y divide-gray-200 sm:mx-20">
        <PageTitle>個人情報保護方針</PageTitle>
        <div
          className="py-5 px-5 text-lg md:py-10 lg:py-16"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.data.body}`,
          }}
        />
      </div>
    </FluidLayout>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "privacy",
  });

  return {
    props: {
      data,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default Private;
