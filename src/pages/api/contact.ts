import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { buildContactEmail } from "src/lib/contactEmail";
import { env } from "src/lib/env";
import { type ContactFormPayload, isSpamSubmission } from "src/lib/spamFilter";
import { resolveTurnstileSecret, verifyTurnstileToken } from "src/lib/turnstile";

const FAKE_SUCCESS = { id: "accepted" };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const payload = req.body as ContactFormPayload;

  if (!payload.email || !payload.surname || !payload.givenname) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const turnstileSecret = resolveTurnstileSecret();
  if (turnstileSecret) {
    if (!payload.turnstileToken) {
      return res.status(400).json({ error: "認証が完了していません。ページを再読み込みして再度お試しください。" });
    }

    const isTurnstileValid = await verifyTurnstileToken(payload.turnstileToken, turnstileSecret);
    if (!isTurnstileValid) {
      return res.status(200).json(FAKE_SUCCESS);
    }
  }

  if (isSpamSubmission(payload)) {
    return res.status(200).json(FAKE_SUCCESS);
  }

  try {
    const resend = new Resend(env.require("RESEND_API_KEY"));
    const emailData = buildContactEmail(payload);

    const data = await resend.emails.send({
      from: emailData.from,
      to: [emailData.to],
      subject: emailData.subject,
      text: emailData.text,
      replyTo: emailData.replyTo,
    });

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json(data.data ?? FAKE_SUCCESS);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: "Failed to send email" });
  }
};

// eslint-disable-next-line import/no-default-export
export default handler;
