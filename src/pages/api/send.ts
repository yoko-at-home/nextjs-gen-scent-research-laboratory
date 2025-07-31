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
      to: [to],
      subject: subject,
      text: text,
    };

    if (replyTo) {
      emailData.replyTo = replyTo;
    }

    const data = await resend.emails.send(emailData);
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Failed to send email" });
    }
  }
};

// eslint-disable-next-line import/no-default-export
export default handler;
