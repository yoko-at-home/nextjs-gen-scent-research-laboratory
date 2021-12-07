export const PageTitle = (props) => {
  return (
    <h1 className="mt-20 mb-5 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10 md:mt-32 md:mb-16 md:text-5xl md:leading-10 lg:mb-10">
      {props.children}
    </h1>
  );
};
