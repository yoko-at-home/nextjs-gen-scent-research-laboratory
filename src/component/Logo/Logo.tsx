/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="hidden sm:block">
      <Link href="/" aria-label="Gen-Scent Research Laboratory Ltd. ロゴ">
        <img src="/static/Logo-60.svg" alt="Gen-Scent Research Laboratory Ltd. ロゴ" width={60} height={60} />
      </Link>
    </div>
  );
};
export const LogoSmall = () => {
  return (
    <div className="sm:hidden">
      <Link href="/" aria-label="Gen-Scent Research Laboratory Ltd. ロゴ">
        <img src="/static/Logo-40.svg" alt="Gen-Scent Research Laboratory Ltd. ロゴ" width={40} height={40} />
      </Link>
    </div>
  );
};
