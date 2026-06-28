export type ContactFormPayload = {
  surname?: string;
  givenname?: string;
  labo?: string;
  department?: string;
  researcher?: string;
  other_occupation?: string;
  zipcode?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  phone1?: string;
  phone2?: string;
  email?: string;
  speciality?: string;
  reference?: string;
  message?: string;
  newsletter?: string;
  website?: string;
  _ts?: number | string;
  turnstileToken?: string;
};

const MIN_SUBMIT_MS = 3000;

const SPAM_EMAIL_DOMAINS = [
  "jmailservice.com",
  "form-sales.online",
  "saleslist-x.com",
  "revocomi.com",
  "sbroute.net",
  "saiyoupage.com",
  "promarketer-agent.com",
  "leadpilot-ai.com",
  "mamayoro.com",
  "soga.fit",
];

const SPAM_PHRASES = [
  "突然のご連絡失礼",
  "突然のご連絡、失礼",
  "突然のご連絡にて失礼",
  "配信停止",
  "unsubscribe",
  "track.revocomi.com",
  "track.sbroute.net",
  "Within 24 hours",
  "search results",
  "show up first",
  "SEO",
  "Instagram運用",
  "無料診断",
  "営業代行",
  "AIエージェント",
  "LeadPilot",
  "SalesBreaker",
  "Pro Marketer",
];

const collectText = (payload: ContactFormPayload): string => {
  return [
    payload.surname,
    payload.givenname,
    payload.labo,
    payload.department,
    payload.researcher,
    payload.other_occupation,
    payload.speciality,
    payload.reference,
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");
};

export const isSpamSubmission = (payload: ContactFormPayload): boolean => {
  if (payload.website?.trim()) {
    return true;
  }

  const loadedAt = Number(payload._ts);
  if (!Number.isFinite(loadedAt) || Date.now() - loadedAt < MIN_SUBMIT_MS) {
    return true;
  }

  const email = (payload.email ?? "").toLowerCase();
  if (
    SPAM_EMAIL_DOMAINS.some((domain) => {
      return email.endsWith(`@${domain}`);
    })
  ) {
    return true;
  }

  const text = collectText(payload).toLowerCase();
  if (
    SPAM_PHRASES.some((phrase) => {
      return text.includes(phrase.toLowerCase());
    })
  ) {
    return true;
  }

  if (/https?:\/\/[^\s]*track\./i.test(text)) {
    return true;
  }

  return false;
};
