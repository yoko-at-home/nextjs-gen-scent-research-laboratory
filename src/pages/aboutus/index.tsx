import type { NextPage } from "next";
import { client } from "src/lib/client";

import { Contents } from "../../component/Contents";

type Props = {
  data: {
    address: string;
    description1: string;
    description2: string;
    description3?: string;
    description4?: string;
    affiliate1: string;
    affiliate1_url: string;
    affiliate2: string;
    affiliate2_url: string;
    affiliate3: string;
    affiliate3_url: string;
    affiliate4: string;
    affiliate4_url: string;
    affiliate5?: string;
    affiliate5_url?: string;
    affiliate6?: string;
    affiliate6_url?: string;
    affiliate7?: string;
    affiliate7_url?: string;
    affiliate8?: string;
    affiliate8_url?: string;
    affiliate9?: string;
    affiliate9_url?: string;
    affiliate10?: string;
    affiliate10_url?: string;
    title: string;
  };
};

const AboutUs: NextPage<Props> = (props) => {
  return (
    <>
      <div
        className="absolute top-0 hidden min-h-screen w-full bg-cover bg-top text-white sm:block"
        style={{
          backgroundImage:
            "url('https://images.microcms-assets.io/assets/7e488163bae049938953f9f59d95f21d/aa5b535010b041a48156f6033a59822c/aboutus-background.webp?w=2234')",
        }}
      >
        <Contents data={props.data} isMobile={false} />
      </div>
      <div
        className="absolute top-0 min-h-screen w-full bg-cover bg-top text-white sm:hidden"
        style={{
          backgroundImage: "url('/static/images/header/background-mobile.webp')",
        }}
      >
        <Contents data={props.data} isMobile={true} />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "aboutus",
  });

  return {
    props: {
      data,
    },
  };
};
export default AboutUs;
