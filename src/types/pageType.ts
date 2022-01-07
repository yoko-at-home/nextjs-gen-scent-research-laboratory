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
