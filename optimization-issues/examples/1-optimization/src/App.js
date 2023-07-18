import GreenSection from "./components/Sections/GreenSection/GreenSection";
import RedSection from "./components/Sections/RedSection/RedSection";
import { BlueStrong } from "./components/Strongs/BlueStrong/BlueStrong";

function App() {
  return (
    <>
      <BlueStrong>Blue strong component (Direct Import)</BlueStrong>
      <hr />
      <GreenSection />
      <hr />
      <RedSection />
    </>
  );
}

export default App;
