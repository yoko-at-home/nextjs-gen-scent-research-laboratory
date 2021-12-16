import Image from "next/image";
import Link from "next/link";
import { siteMetadata } from "src/data/siteMetaData";

export const Logo = () => {
  const src = "/static/images/logo.png";

  return (
    <>
      <div>
        <Link href="/" aria-label={siteMetadata.author} passHref>
          <a>
            <Image className="md:hidden" src={src} alt={siteMetadata.author} width="60px" height="60px" />
          </a>
        </Link>
      </div>
    </>
  );
};
