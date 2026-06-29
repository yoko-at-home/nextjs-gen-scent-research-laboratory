type EnvKey =
  | "API_KEY"
  | "RESEND_API_KEY"
  | "NEXT_PUBLIC_API_URL"
  | "CONTACT_EMAIL"
  | "RESEND_FROM_EMAIL"
  | "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID"
  | "NEXT_PUBLIC_TURNSTILE_SITE_KEY"
  | "TURNSTILE_SECRET_KEY"
  | "SITE_URL";

const getRaw = (name: EnvKey): string | undefined => {
  return process.env[name];
};

export const requireEnv = (name: EnvKey): string => {
  const v = getRaw(name);
  if (!v) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return v;
};

export const env = {
  get: getRaw,
  require: requireEnv,
};
