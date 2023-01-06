import Link from "next/link";
import type { FC } from "react";
import { siteMetadata } from "src/data/siteMetaData";

/**
 * @package
 */
export const Footer: FC = () => {
  return (
    <footer className="mt-5 bg-stone-50/40">
      <div className="mt-16 flex flex-col items-center">
        <div className="mx-5 mb-2 flex justify-between space-x-2 text-sm">
          <div>{siteMetadata.author}</div>
          <div className="whitespace-nowrap">{`© ${new Date().getFullYear()}`}</div>
          <div className="whitespace-nowrap font-caribri">All Rights Reserved.</div>
        </div>
        <div className="mb-2 flex space-x-2 text-xs hover:text-gray-400">
          <Link href="/privacy">個人情報保護方針</Link>
        </div>
        <div className="my-8 font-caribri text-xs hover:text-gray-400">
          <Link href="https://over40web.club">
            <a target="_blank" rel="noopener noreferrer">
              Powered by Over 40 Web Club
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
