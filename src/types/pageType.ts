export type HomeProps = {
  data: {
    body: HTMLAnchorElement;
    createdAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
  };
};

export type ProductProps = {
  odor: [
    {
      description: string;
      id: string;
      image: { url: string; height: number; width: number };
      title: string;
    }
  ];
  other: [
    {
      description: string;
      id: string;
      image: { url: string; height: number; width: number };
      note: string;
      title: string;
    }
  ];
  sample: [
    {
      description: string;
      id: string;
      image: { url: string; height: number; width: number };
      title: string;
      product_title: string;
    }
  ];
  software: [
    {
      description: string;
      id: string;
      image: { url: string; height: number; width: number };
      title: string;
      subtitle: string;
      product_title: string;
    }
  ];
  software2: [
    {
      description: string;
      id: string;
      image: { url: string; height: number; width: number };
      title: string;
      subtitle: string;
      product_title: string;
    }
  ];
};

export type NewsProps = {
  news: [
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
export type ApplicationProps = {
  application: [
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

export type PrivacyProps = {
  data: {
    body?: HTMLAnchorElement;
    createdAt: Date;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
  };
};
