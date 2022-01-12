import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "genscent",
  apiKey: process.env.MICROCMS_API_KEY,
});
