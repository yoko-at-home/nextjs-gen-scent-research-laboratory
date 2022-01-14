import axios from "axios";
import type { NextApiHandler } from "next";

const preview: NextApiHandler = async (req, res) => {
  // クエリの確認
  if (req.query.secret !== process.env.CMS_API_KEY || !req.query.id || !req.query.draftKey) {
    return res.status(401).json({ message: `Invalid query, ${process.env.CMS_API_KEY}` });
  }

  // 下書きのデータを取得
  const key = {
    headers: { "X-API-KEY": process.env.CMS_API_KEY },
  };
  // console.log(req.query.id);

  const url = "https://genscent.microcms.io/api/v1/news/" + req.query.id + `?draftKey=${req.query.draftKey}`;
  const post = await axios.get(url, key);

  // エラー処理
  if (!post) {
    return res.status(401).json({ message: "Invalid draft key" });
  }

  // プレビューデータを格納
  res.setPreviewData({
    draftKey: req.query.draftKey,
    id: req.query.id,
  });

  // 詳細ページへリダイレクト
  res.writeHead(307, { Location: `/news/${req.query.id}` });

  res.end("Preview mode enabled");
};

export default preview;
