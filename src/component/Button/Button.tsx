import { useRouter } from "next/router";

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
