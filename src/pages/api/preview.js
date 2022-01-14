import fetch from "node-fetch";

export default async function preview(req, res) {
  if (!req.query.slug) {
    return res.status(404).end();
  }
  const content = await fetch(
    `https://genscent.microcms.io/api/v1/news/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { "X-API-KEY": process.env.CMS_API_KEY || "" } }
  )
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return console.error(error);
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
