// Product ページ共通型オブジェクト
type BasicPageObject = {
  createdAt: Date;
  description: string;
  id: string;
  image: { url: string; height: number; width: number };
  title: string;
};

export type ProductProps = {
  odor: [BasicPageObject];
  other: [BasicPageObject & { note: string }];
  sample: [
    BasicPageObject & {
      charm: {
        height: number;
        url: string;
        width: number;
      };
      product_title: string;
    }
  ];
  software: [
    BasicPageObject & {
      product_title: string;
      subtitle: string;
    }
  ];
  software2: [
    BasicPageObject & {
      product_title: string;
      subtitle: string;
    }
  ];
};

// Productページ以外の共通型定義（リスト用
export type BasicProps = {
  data: [
    {
      body: HTMLAnchorElement;
      createdAt: Date;
      description: string;
      id: string;
      publishedAt: Date;
      revisedAt: Date;
      title: string;
      updatedAt: Date;
    }
  ];
};

// Productページ以外の共通型定義（オブジェクト用
export type BasicObjectProps = {
  data: {
    body?: HTMLAnchorElement;
    createdAt: Date;
    description: string;
    id: string;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
  };
};

export type SimpleObject = {
  body: HTMLAnchorElement;
  createdAt: Date;
  description: string;
  id: string;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  updatedAt: Date;
};
