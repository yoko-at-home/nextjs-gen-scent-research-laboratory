import { siteMetadata } from "src/data/siteMetaData";

import type { ContactFormPayload } from "./spamFilter";

const resolveOccupation = (payload: ContactFormPayload): string => {
  if (payload.researcher === "その他" && payload.other_occupation?.trim()) {
    return `その他（${payload.other_occupation.trim()}）`;
  }
  return payload.researcher ?? "";
};

export const resolveContactRecipient = (): string => {
  return (
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    (process.env.NODE_ENV === "development" ? "yoko_iwasakijp@yahoo.co.jp" : siteMetadata.email)
  );
};

export const resolveFromAddress = (): string => {
  const fromEmail = process.env.NEXT_PUBLIC_RESEND_FROM_EMAIL || "onboarding@resend.dev";
  return `Gen-Scent Research Laboratory Ltd. <${fromEmail}>`;
};

export const buildContactEmail = (payload: ContactFormPayload) => {
  const newsletter = payload.newsletter === "不要" ? "不要" : "要";
  const occupation = resolveOccupation(payload);

  const text = `以下の内容でご登録を承りました。後ほど、ご登録完了のお知らせをメールでお送りいたします。
完了まで１⽇程度お時間がかかる場合がございますのでご了承ください。

${payload.surname} ${payload.givenname} 様

ご所属先
会社/機関/⼤学： ${payload.labo}
部署/研究：${payload.department}

ご職業: ${occupation}

ご住所
〒 ${payload.zipcode ?? ""}
${payload.address1 ?? ""}${payload.address2 ?? ""}${payload.address3 ?? ""}

📞 ${payload.phone1} 内線: ${payload.phone2 ?? ""}

✉️ ${payload.email}

ご専⾨分野: ${payload.speciality ?? ""}

資料ご請求製品名: ${payload.reference ?? ""}

お問い合わせ内容:
${payload.message ?? ""}


ニュースレター配信: ${newsletter}`;

  return {
    subject: "登録を承りました。",
    to: resolveContactRecipient(),
    from: resolveFromAddress(),
    text,
    replyTo: payload.email,
  };
};
