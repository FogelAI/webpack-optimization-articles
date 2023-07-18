import { GreenText } from "./components/Texts/GreenText/GreenText";
import { RedText } from "./components/Texts/RedText/RedText";
import { getHundredNumber } from "./tools/numberFunctions/numberFunctions";
import { getUnusedModuleText } from "./tools/unusedModule/unusedModule";
import "./tools/sideEffectsModule/sideEffectsModule";

function App() {
  const hundredNumber = getHundredNumber();
  return (
    <>
      <GreenText>Number in green: {hundredNumber}</GreenText>
      <RedText>Text in red</RedText>
    </>
  );
}

export default App;
