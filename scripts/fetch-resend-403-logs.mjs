/**
 * Fetch all Resend API logs with 403 status and print email addresses + error messages.
 *
 * Usage:
 *   node --env-file=.env.local scripts/fetch-resend-403-logs.mjs
 *   node --env-file=.env.local scripts/fetch-resend-403-logs.mjs --out resend-403-logs.json
 */

import { writeFileSync } from "node:fs";

const outPath = process.argv.includes("--out") ? process.argv[process.argv.indexOf("--out") + 1] : null;

const API_BASE = "https://api.resend.com";
const PAGE_SIZE = 100;

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("Missing RESEND_API_KEY. Run with: node --env-file=.env.local scripts/fetch-resend-403-logs.mjs");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
  "User-Agent": "nextjs-gen-scent-research-laboratory/1.0",
};

async function resendGet(path) {
  const res = await fetch(`${API_BASE}${path}`, { headers });
  const body = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(`GET ${path} failed (${res.status}): ${JSON.stringify(body)}`);
  }

  return body;
}

async function listAllLogs() {
  const logs = [];
  let after;

  while (true) {
    const query = new URLSearchParams({ limit: String(PAGE_SIZE) });
    if (after) query.set("after", after);

    const page = await resendGet(`/logs?${query.toString()}`);
    const items = page.data ?? [];

    logs.push(...items);

    if (!page.has_more || items.length === 0) {
      break;
    }

    after = items[items.length - 1].id;
  }

  return logs;
}

function parseJson(value) {
  if (value == null) return null;
  if (typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch {
    return { raw: value };
  }
}

function normalizeEmails(value) {
  if (value == null) return [];
  const list = Array.isArray(value) ? value : [value];
  return list.filter(Boolean);
}

function extractEmailFields(requestBody) {
  const req = parseJson(requestBody) ?? {};

  return {
    to: normalizeEmails(req.to),
    from: req.from ?? null,
    replyTo: normalizeEmails(req.reply_to ?? req.replyTo),
    subject: req.subject ?? null,
    text: req.text ?? null,
  };
}

function extractErrorMessage(responseBody, responseStatus) {
  const res = parseJson(responseBody);

  if (res && typeof res === "object") {
    if (typeof res.message === "string") return res.message;
    if (res.error && typeof res.error.message === "string") return res.error.message;
    if (typeof res.error === "string") return res.error;
  }

  if (typeof responseBody === "string" && responseBody.trim()) {
    return responseBody;
  }

  return `HTTP ${responseStatus ?? 403}`;
}

async function main() {
  console.error("Fetching log list from Resend...");
  const allLogs = await listAllLogs();
  const forbiddenLogs = allLogs.filter((log) => log.response_status === 403);

  console.error(`Found ${forbiddenLogs.length} log(s) with status 403 (out of ${allLogs.length} total).`);
  console.error("Fetching details...\n");

  const results = [];

  for (const summary of forbiddenLogs) {
    const detail = await resendGet(`/logs/${summary.id}`);

    const emails = extractEmailFields(detail.request_body);
    const errorMessage = extractErrorMessage(detail.response_body, detail.response_status ?? summary.response_status);

    results.push({
      id: summary.id,
      createdAt: summary.created_at ?? detail.created_at ?? null,
      endpoint: summary.endpoint ?? detail.endpoint ?? null,
      method: summary.method ?? detail.method ?? null,
      status: detail.response_status ?? summary.response_status ?? 403,
      errorMessage,
      emails: {
        to: emails.to,
        from: emails.from,
        replyTo: emails.replyTo,
      },
      subject: emails.subject,
      text: emails.text,
    });
  }

  const json = JSON.stringify(results, null, 2);

  if (outPath) {
    writeFileSync(outPath, `${json}\n`, "utf8");
    console.error(`Wrote ${results.length} log(s) to ${outPath}`);
  }

  console.log(json);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
