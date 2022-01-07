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
      body: HTMLAnchorElement;
      button: string;
      button_desc: string;
      createdAt: Date;
      description: string;
      id: string;
      image: { url: string; height: number; width: number };
      publishedAt: Date;
      revisedAt: Date;
      title: string;
      updatedAt: Date;
    }
  ];
  other: [
    {
      body: HTMLAnchorElement;
      button: string;
      button_desc: string;
      createdAt: Date;
      description: string;
      id: string;
      image: { url: string; height: number; width: number };
      note: string;
      publishedAt: Date;
      revisedAt: Date;
      title: string;
      updatedAt: Date;
    }
  ];
  sample: [
    {
      body: HTMLAnchorElement;
      button: string;
      button_desc: string;
      charm: {
        height: number;
        url: string;
        width: number;
      };
      charm_body: {
        height: number;
        url: string;
        width: number;
      };
      createdAt: Date;
      description: string;
      description_body: string;
      id: string;
      image: {
        height: number;
        url: string;
        width: number;
      };
      produced_by: string;
      product_title: string;
      publishedAt: Date;
      revisedAt: Date;
      title: string;
      updatedAt: Date;
    }
  ];
  software: [
    {
      body: HTMLAnchorElement;
      button: string;
      button_desc: string;
      createdAt: Date;
      description: string;
      description_body: string;
      description_body2: string;
      id: string;
      image: {
        height: number;
        url: string;
        width: number;
      };
      produced_by: string;
      product_title: string;
      publishedAt: Date;
      revisedAt: Date;
      subtitle: string;
      title: string;
      updatedAt: Date;
    }
  ];
  software2: [
    {
      body: HTMLAnchorElement;
      button: string;
      button_desc: string;
      createdAt: Date;
      description: string;
      description_body: string;
      description_body2: string;
      id: string;
      image: {
        height: number;
        url: string;
        width: number;
      };
      produced_by: string;
      product_title: string;
      publishedAt: Date;
      revisedAt: Date;
      subtitle: string;
      title: string;
      updatedAt: Date;
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
