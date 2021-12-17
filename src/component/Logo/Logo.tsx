import Image from "next/image";
import Link from "next/link";
import { siteMetadata } from "src/data/siteMetaData";

export const Logo = () => {
  const src = "/static/images/logo.png";

  return (
    <div className="hidden sm:block">
      <Link href="/" aria-label={siteMetadata.author} passHref>
        <a>
          <Image src={src} alt={siteMetadata.author} width="60px" height="60px" />
        </a>
      </Link>
    </div>
  );
};
export const LogoSmall = () => {
  const src = "/static/images/logo.png";

  return (
    <div className="sm:hidden">
      <Link href="/" aria-label={siteMetadata.author} passHref>
        <a>
          <Image src={src} alt={siteMetadata.author} width="30px" height="30px" />
        </a>
      </Link>
    </div>
  );
};
