export type BasicProps = {
  data: {
    body: HTMLAnchorElement;
    button: string;
    button_desc: string;
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
    subtitle: string;
    title: string;
    updatedAt: Date;
  };
};

export type SoftwareProps = BasicProps & {
  data: {
    produced_by: string;
    description_body2: string;
  };
};

export type SampleProps = BasicProps & {
  data: {
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
  };
};

export type OtherProps = BasicProps & {
  data: {
    note: string;
  };
};
