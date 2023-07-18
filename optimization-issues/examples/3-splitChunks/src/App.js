import { lazy, Suspense } from "react";
import { BlueStrong } from "./components/Strongs/BlueStrong/BlueStrong";

const GreenSection = lazy(() =>
  import(
    /* webpackChunkName: 'GreenSection' */ "./components/Sections/GreenSection/GreenSection"
  )
);

const RedSection = lazy(() =>
  import(
    /* webpackChunkName: 'RedSection' */ "./components/Sections/RedSection/RedSection"
  )
);

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <BlueStrong>Blue strong component (Direct Import)</BlueStrong>
        <hr />
        <GreenSection />
        <hr />
        <RedSection />
      </Suspense>
    </>
  );
}

export default App;
