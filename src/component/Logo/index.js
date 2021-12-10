import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div className="hidden absolute top-7 right-20 z-30 lg:block">
        <Link href="/" aria-label="Gen-Scent Research Laboratory" passHref>
          <Image src={"/static/images/logo.png"} alt="logo" width="70px" height="70px" />
        </Link>
      </div>
      <div className="absolute top-5 right-8 z-30 sm:right-16 lg:hidden">
        <Link href="/" aria-label="Gen-Scent Research Laboratory" passHref>
          <Image src={"/static/images/logo.png"} alt="logo" width="50px" height="50px" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
