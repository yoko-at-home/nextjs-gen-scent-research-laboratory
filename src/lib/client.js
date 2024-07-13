import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "genscent",
  apiKey: process.env.API_KEY,
});
