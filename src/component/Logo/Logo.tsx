import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  const src = "/static/images/logo.png";

  return (
    <div className="hidden sm:block">
      <Link href="/" aria-label="Gen-Scent Research Laboratoryロゴ" passHref>
        <a aria-label="ホームへ">
          <Image src={src} alt="Gen-Scent Research Laboratoryロゴ" width="60px" height="60px" />
        </a>
      </Link>
    </div>
  );
};
export const LogoSmall = () => {
  const src = "/static/images/logo.png";

  return (
    <div className="sm:hidden">
      <Link href="/" aria-label="Gen-Scent Research Laboratoryロゴ" passHref>
        <a aria-label="ホームへ">
          <Image src={src} alt="Gen-Scent Research Laboratoryロゴ" width="40px" height="40px" />
        </a>
      </Link>
    </div>
  );
};
