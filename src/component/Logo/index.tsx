import Image from "next/image";
import Link from "next/link";
import { siteMetadata } from "src/data/siteMetaData";

export const Logo = () => {
  const src = "/static/images/logo.png";
  const mobile = "absolute top-5 right-8 z-30 sm:right-16 md:hidden";
  const md = "hidden absolute top-7 right-20 z-30 md:block lg:hidden";
  const lg = "hidden absolute top-7 right-20 z-30 lg:block";

  return (
    <>
      <div className={mobile}>
        <Link href="/" aria-label={siteMetadata.author} passHref>
          <a>
            <Image src={src} alt={src} width="50px" height="50px" />
          </a>
        </Link>
      </div>
      <div className={md}>
        <Link href="/" aria-label={siteMetadata.author} passHref>
          <a>
            <Image src={src} alt={src} width="60px" height="60px" />
          </a>
        </Link>
      </div>
      <div className={lg}>
        <Link href="/" aria-label={siteMetadata.author} passHref>
          <a>
            <Image src={src} alt={src} width="70px" height="70px" />
          </a>
        </Link>
      </div>
    </>
  );
};
