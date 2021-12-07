import { format, parseISO } from "date-fns";

// eslint-disable-next-line react/destructuring-assignment
export const Date = ({ dateString }) => {
  const date = parseISO(dateString);
  // return <time dateTime={dateString}>{format(date, "yyyy年M月d日 HH時MM分")}</time>;
  return <time dateTime={dateString}>{format(date, "yyy LLL ii k:mm")}</time>;
};
