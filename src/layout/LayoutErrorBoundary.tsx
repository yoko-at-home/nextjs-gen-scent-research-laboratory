import type { FC, ReactNode } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = (props: FallbackProps) => {
  return (
    <div>
      <div>Something went wrong:</div>
      <pre>{props.error.message}</pre>
    </div>
  );
};

/**
 * @package
 */
export const LayoutErrorBoundary: FC<{ children: ReactNode }> = (props) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{props.children}</ErrorBoundary>;
};
