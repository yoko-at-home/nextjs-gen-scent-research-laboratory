import { useRouter } from "next/router";
import type { VFC } from "react";

export const ButtonReturn = () => {
  const router = useRouter();
  const handleOnClick = () => {
    return router.back();
  };
  return (
    <button type="button" onClick={handleOnClick}>
      <a className="p-3 px-3 mr-5 text-xs font-bold text-gray-100 bg-gradient-to-r from-gray-400 to-gray-500 rounded opacity-80 sm:text-base">
        Return
      </a>
    </button>
  );
};

type ButtonToContactProps = {
  children: string;
};
export const ButtonToContact: VFC<ButtonToContactProps> = (props) => {
  const router = useRouter();
  const handleOnClick = () => {
    return router.push("/contact");
  };
  return (
    <button type="button" onClick={handleOnClick}>
      <a className="p-5 font-bold tracking-widest text-gray-100 bg-gradient-to-r from-gray-400 to-[#330033] rounded opacity-90 sm:text-lg">
        {props.children}
      </a>
    </button>
  );
};
