import "/src/style/index.css";

import type { AppProps } from "next/app";
import { GoogleAnalytics } from "src/component/GoogleAnalytics";
import { usePageView } from "src/lib/usePageView";

const App = (props: AppProps) => {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <props.Component {...props.pageProps} />
    </>
  );
};

export default App;
