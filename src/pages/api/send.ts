import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailRequest {
  to: string;
  from: string;
  subject: string;
  text: string;
  replyTo?: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { from, replyTo, subject, text, to }: EmailRequest = req.body;

    // デバッグログ
    // console.log("API Key:", process.env.RESEND_API_KEY ? "Set" : "Not set");
    // console.log("Email Request:", { to, from, subject, replyTo });

    // バリデーション
    if (!to || !from || !subject || !text) {
      // console.log("Validation failed:", { to, from, subject, text });
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
      to: [to],
      subject: subject,
      text: text,
    };

    if (replyTo) {
      emailData.replyTo = replyTo;
    }

    // console.log("Sending email with data:", emailData);
    const data = await resend.emails.send(emailData);
    // console.log("Email sent successfully:", data);
    res.status(200).json(data);
  } catch (error) {
    // console.error("Email sending failed:", error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Failed to send email" });
    }
  }
};

// eslint-disable-next-line import/no-default-export
export default handler;
