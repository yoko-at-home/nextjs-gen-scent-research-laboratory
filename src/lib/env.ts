type EnvKey =
  | "API_KEY"
  | "RESEND_API_KEY"
  | "NEXT_PUBLIC_API_URL"
  | "NEXT_PUBLIC_CONTACT_EMAIL"
  | "NEXT_PUBLIC_RESEND_FROM_EMAIL"
  | "NEXT_PUBLIC_GOOGLE_ANALYTICS_ID"
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
