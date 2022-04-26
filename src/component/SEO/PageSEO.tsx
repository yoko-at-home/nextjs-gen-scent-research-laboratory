import Head from "next/head";
import { useRouter } from "next/router";
import type { FC } from "react";
import { siteMetadata } from "src/data/siteMetaData";

type Props = {
  title: string;
  description: string;
  ogType: string;
  ogImage: string;
  siteUrl: string;
};

const CommonSEO: FC<Props> = ({ description, ogImage, ogType, title }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/static/favicons/favicon.ico" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} key={ogImage} />
    </Head>
  );
};

export const PageSEO: FC<Props> = ({ description, title }) => {
  const ogSiteLogo = siteMetadata.siteUrl + siteMetadata.siteLogo;

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        siteUrl={siteMetadata.siteUrl}
        ogImage={ogSiteLogo}
      />
      <link rel="icon" href="/static/favicons/favicon.ico" />
    </>
  );
};
