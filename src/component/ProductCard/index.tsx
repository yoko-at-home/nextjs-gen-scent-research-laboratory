import Link from "next/link";
import type { FC } from "react";

type ProductCard = {
  id: string;
  title?: string;
  subtitle?: string;
  product_title?: string;
  description: string;
  image: { url: string; width: number; height: number };
  charm?: { url: string; width: number; height: number };
  note?: string;
};

type Props = {
  item: ProductCard;
  basePath: string;
};

export const ProductCard: FC<Props> = ({ basePath, item }) => {
  return (
    <Link href={`${basePath}/${item.id}`} aria-label="Read more">
      <div
        className="relative flex h-36 rounded p-1 hover:scale-[0.99] hover:opacity-90 sm:p-3"
        style={{ background: `center/cover no-repeat url(${item.image.url})`, opacity: 0.7 }}
      >
        {/* オーバーレイ用の div を追加 */}
        <div className="absolute inset-0 rounded bg-black/20" /> {/* 透過性の背景色を設定 */}
        <div className="relative z-10 flex w-full flex-col px-2 pt-2">
          <div className="mb-2 font-bold leading-tight">
            {!item.title ? null : item.title}
            {!item.subtitle ? null : <div>{item.subtitle}</div>}
            {!item.product_title ? <div className="mt-1" /> : <div>{item.product_title}</div>}
          </div>
          <div className="line-clamp-4 text-ellipsis text-sm">
            {item.description}
            {item.note && (
              <>
                <br />
                {item.note}
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
