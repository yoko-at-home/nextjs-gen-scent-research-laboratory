export const Pagination = (props) => {
  const PER_PAGE = 12;

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  return (
    <div className="flex justify-center pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="flex flex-row">
        <ul className="flex text-white">
          {range(1, Math.ceil(props.totalCount / PER_PAGE)).map((number, index) => {
            return <li key={index}>{number}</li>;
          })}
        </ul>
      </nav>
    </div>
  );
};
