import axios from "axios";

const preview = async (req, res) => {
  // クエリの確認
  if (!req.query.slug) {
    return res.status(404).end();
  }
  // if (req.query.secret !== process.env.CMS_API_KEY || !content.id || !req.query.draftKey) {
  //   return res.status(401).json({ message: `Invalid query, ${process.env.CMS_API_KEY}` });
  // }

  // 下書きのデータを取得
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.CMS_API_KEY || "" },
  };
  // console.log(content.id);

  const content =
    `${process.env.NEXT_PUBLIC_API_URL}news/` + `${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`;
  const url = `${process.env.NEXT_PUBLIC_API_URL}news/` + content.id + `?draftKey=${req.query.draftKey}`;
  const post = await axios.get(url, key);

  // エラー処理
  if (!post) {
    return res.status(401).json({ message: "Invalid draft key" });
  }
  if (!content) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  // プレビューデータを格納
  res.setPreviewData({
    draftKey: req.query.draftKey,
    slug: content.id,
  });

  // 詳細ページへリダイレクト
  res.writeHead(307, { Location: `/news/${content.id}` });

  res.end("Preview mode enabled");
};

export default preview;
