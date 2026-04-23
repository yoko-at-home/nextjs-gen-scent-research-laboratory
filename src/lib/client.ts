import { createClient } from "microcms-js-sdk";
import { env } from "src/lib/env";

export const client = createClient({
  serviceDomain: "genscent",
  apiKey: env.require("API_KEY"),
});
