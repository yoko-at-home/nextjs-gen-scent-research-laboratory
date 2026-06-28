import Script from "next/script";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { TURNSTILE_TEST_SITE_KEY } from "src/lib/turnstile";

type TurnstileRenderOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
  language?: string;
  theme?: "light" | "dark" | "auto";
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export type TurnstileWidgetHandle = {
  reset: () => void;
};

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
};

const resolveSiteKey = (): string | undefined => {
  if (process.env.NEXT_PUBLIC_TURNSTILE_USE_TEST_KEY === "true") {
    return TURNSTILE_TEST_SITE_KEY;
  }
  // Production sitekeys require localhost in Cloudflare hostname settings.
  // Use Cloudflare dummy keys locally so dev works without extra dashboard config.
  if (process.env.NODE_ENV === "development") {
    return TURNSTILE_TEST_SITE_KEY;
  }
  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
};

const siteKey = resolveSiteKey();

const TurnstileWidgetComponent = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(({ onVerify }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onVerifyRef = useRef(onVerify);
  const [isScriptReady, setIsScriptReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.turnstile) {
      setIsScriptReady(true);
    }
  }, []);

  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);

  useImperativeHandle(ref, () => {
    return {
      reset: () => {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
        onVerifyRef.current("");
      },
    };
  });

  const handleScriptLoad = useCallback(() => {
    setIsScriptReady(true);
  }, []);

  useEffect(() => {
    if (!isScriptReady || !siteKey || !containerRef.current || !window.turnstile) {
      return;
    }

    if (widgetIdRef.current) {
      return;
    }

    const container = containerRef.current;
    const widgetId = window.turnstile.render(container, {
      sitekey: siteKey,
      callback: (token) => {
        onVerifyRef.current(token);
      },
      "expired-callback": () => {
        onVerifyRef.current("");
      },
      "error-callback": () => {
        onVerifyRef.current("");
      },
      language: "ja",
      theme: "light",
    });
    widgetIdRef.current = widgetId;

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
      container.replaceChildren();
    };
  }, [isScriptReady]);

  if (!siteKey) {
    return null;
  }

  return (
    <>
      <Script
        id="cf-turnstile-script"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <div ref={containerRef} className="my-4 flex justify-end" />
    </>
  );
});

TurnstileWidgetComponent.displayName = "TurnstileWidget";

export const TurnstileWidget = TurnstileWidgetComponent;
