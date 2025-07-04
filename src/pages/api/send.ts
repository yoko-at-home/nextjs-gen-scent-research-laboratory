import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  to: string | string[];
  from: string;
  subject: string;
  text: string;
  replyTo?: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // デバッグ用ログ
  // eslint-disable-next-line no-console
  console.log("API Key exists:", !!process.env.RESEND_API_KEY);
  // eslint-disable-next-line no-console
  console.log("Request body:", req.body);

  try {
    const { from, replyTo, subject, text, to }: EmailRequest = req.body;

    // バリデーション
    if (!to || !from || !subject || !text) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const emailData: {
      from: string;
      to: string[];
      subject: string;
      text: string;
      replyTo?: string;
    } = {
      from: from,
      to: Array.isArray(to) ? to : [to],
      subject: subject,
      text: text,
    };

    if (replyTo) {
      emailData.replyTo = replyTo;
    }

    // eslint-disable-next-line no-console
    console.log("Sending email with data:", { to, from, subject, replyTo });

    const data = await resend.emails.send(emailData);

    // eslint-disable-next-line no-console
    console.log("Email sent successfully:", data);
    res.status(200).json(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error sending email:", error);

    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Failed to send email" });
    }
  }
};

// eslint-disable-next-line import/no-default-export
export default handler;
