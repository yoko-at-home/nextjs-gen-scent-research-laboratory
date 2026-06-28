const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** Cloudflare dummy sitekey — works on localhost without hostname registration */
export const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000AA";

/** Dummy secret for Cloudflare test sitekey (local dev) */
export const TURNSTILE_TEST_SECRET_KEY = "1x0000000000000000000000000000000AA";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export const resolveTurnstileSecret = (): string | undefined => {
  if (process.env.TURNSTILE_USE_TEST_KEY === "true" || process.env.NEXT_PUBLIC_TURNSTILE_USE_TEST_KEY === "true") {
    return TURNSTILE_TEST_SECRET_KEY;
  }

  if (process.env.NODE_ENV === "development") {
    return TURNSTILE_TEST_SECRET_KEY;
  }

  return process.env.TURNSTILE_SECRET_KEY;
};

export const verifyTurnstileToken = async (token: string, secret: string): Promise<boolean> => {
  const response = await fetch(SITEVERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token }),
  });

  if (!response.ok) {
    return false;
  }

  const data = (await response.json()) as TurnstileVerifyResponse;
  return data.success === true;
};
