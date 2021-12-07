/* eslint-disable import/no-default-export */
import Link from "next/link";

import { client } from "../../lib/client";

export default function Product({ software }) {
  return (
    <div>
      <ul>
        {software.map((software) => {
          return (
            <li key={software.id}>
              <Link href={`/software/${software.id}`}>
                <a>{software.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "software" });

  return {
    props: {
      software: data.contents,
    },
  };
};
