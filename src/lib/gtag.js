export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

// IDが取得できない場合を想定する
export const isExistsGaId = GA_ID !== "";

// PVを測定する
export const pageview = (path) => {
  window.gtag("config", GA_ID, {
    pagePath: path,
  });
};

// GAイベントを発火させる
export const event = ({ action, category, label, value = "" }) => {
  if (!isExistsGaId) {
    return;
  }

  window.gtag("event", action, {
    eventCategory: category,
    eventLabel: JSON.stringify(label),
    value,
  });
};
