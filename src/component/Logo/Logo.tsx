/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="hidden sm:block">
      <Link href="/" aria-label="Gen-Scent Research Laboratoryロゴ" passHref>
        <a aria-label="ホームへ">
          <img src="/static/Logo-60.svg" alt="Gen-Scent Research Laboratoryロゴ" width={60} height={60} />
        </a>
      </Link>
    </div>
  );
};
export const LogoSmall = () => {
  return (
    <div className="sm:hidden">
      <Link href="/" aria-label="Gen-Scent Research Laboratoryロゴ" passHref>
        <a aria-label="ホームへ">
          <img src="/static/Logo-40.svg" alt="Gen-Scent Research Laboratoryロゴ" width={40} height={40} />
        </a>
      </Link>
    </div>
  );
};
