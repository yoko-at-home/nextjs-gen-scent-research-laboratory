import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: "Home" | "Return";
  ariaLabel?: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const router = useRouter();
  const handleOnClickHome = () => {
    return router.push("/");
  };
  const handleOnClickReturn = () => {
    return router.back();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      props.onClick === "Return" ? handleOnClickReturn() : handleOnClickHome();
    }
  };

  return (
    <button
      type="button"
      onClick={props.onClick === "Return" ? handleOnClickReturn : handleOnClickHome}
      onKeyDown={handleKeyDown}
      aria-label={props.ariaLabel || (props.onClick === "Return" ? "戻る" : "ホームに戻る")}
      className="rounded bg-gradient-to-r from-gray-400 to-gray-500 p-3 font-bold leading-10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:text-lg"
    >
      {props.children}
    </button>
  );
};

type ButtonToContactProps = {
  children: string;
  ariaLabel?: string;
};

export const ButtonToContact: FC<ButtonToContactProps> = (props) => {
  const router = useRouter();
  const handleOnClick = () => {
    return router.push("/contact");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOnClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
      onKeyDown={handleKeyDown}
      aria-label={props.ariaLabel || "お問い合わせページへ"}
      className="rounded bg-gradient-to-r from-gray-400 to-[#330033] p-5 font-bold tracking-widest text-gray-100 opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:text-lg"
    >
      {props.children}
    </button>
  );
};

export const ButtonToNews: FC<ButtonToContactProps> = (props) => {
  const router = useRouter();
  const handleOnClick = () => {
    return router.push("/news");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOnClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleOnClick}
      onKeyDown={handleKeyDown}
      aria-label={props.ariaLabel || "ニュースページへ"}
      className="rounded bg-gradient-to-r from-gray-400 to-gray-500 p-3 font-bold tracking-tight text-gray-100 opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:text-lg"
    >
      {props.children}
    </button>
  );
};
