import Link from "next/link";
import type { VFC } from "react";
import { siteMetadata } from "src/data/siteMetaData";

/**
 * @package
 */
export const Footer: VFC = () => {
  return (
    <footer className="mt-5 bg-stone-50 bg-opacity-40">
      <div className="flex flex-col items-center mt-16">
        <div className="flex justify-between mx-5 mb-2 space-x-2 text-sm">
          <div>{siteMetadata.author}</div>
          <div className="whitespace-nowrap">{`© ${new Date().getFullYear()}`}</div>
          <div className="font-caribri whitespace-nowrap">All Rights Reserved.</div>
        </div>
        <div className="flex mb-2 space-x-2 text-xs hover:text-gray-400">
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
