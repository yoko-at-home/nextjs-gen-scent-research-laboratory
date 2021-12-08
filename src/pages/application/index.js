import { PageTitle } from "src/component/PageTitle";
import { FluidLayout } from "src/layout";

/* eslint-disable import/no-default-export */
const Application = () => {
  return (
    <div
      style={{
        background: "center/cover no-repeat url('/static/images/coming-soon.jpg')",
      }}
      className="z-10 text-gray-200"
    >
      <div className="z-40 bg-white bg-opacity-30">
        <FluidLayout>
          <PageTitle>
            <div className="z-40">Coming soon….</div>
          </PageTitle>
        </FluidLayout>
      </div>
    </div>
  );
};

export default Application;
