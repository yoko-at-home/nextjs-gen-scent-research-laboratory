import Link from "next/link";
import type { VFC } from "react";
import { siteMetadata } from "src/data/siteMetaData";

/**
 * @package
 */
export const Footer: VFC = () => {
  return (
    <footer>
      <div className="flex flex-col items-center mt-32">
        <div className="flex mb-2 space-x-2 text-sm">
          <div>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>All Rights Reserved.</div>
        </div>
        <div className="my-8 text-sm text-gray-400">
          <Link href="https://over40webclub.netlify.app/">
            <a target="_blank" rel="noopener noreferrer">
              Powered by Over 40 Web Club
            </a>
          </Link>
        </div>
        {/* <NavBarMobile /> */}
      </div>
    </footer>
  );
};
