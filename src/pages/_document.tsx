/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable import/no-default-export */
import { Head, Html, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="ja">
      <Head>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#330033" />
        <meta name="msapplication-TileColor" content="#330033" />
        <meta name="theme-color" content="#330033" />
        {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="antialiased bg-white">
        <Main />
        <div id="root"></div>
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
