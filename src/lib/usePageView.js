import { useRouter } from "next/router";
import { useEffect } from "react";

import * as gtag from "./gtag";

export const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (!gtag.isExistsGaId) {
      return;
    }

    const handleRouteChange = (path, { shallow }) => {
      if (!shallow) gtag.pageview(path);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
