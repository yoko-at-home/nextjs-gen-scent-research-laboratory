import fetch from "node-fetch";
import { env } from "src/lib/env";

export default async function preview(req, res) {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    `${env.require("NEXT_PUBLIC_API_URL")}news/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { "X-MICROCMS-API-KEY": env.require("API_KEY") } },
  )
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/news/${content.id}` });
  res.end("Preview mode enabled");
}
