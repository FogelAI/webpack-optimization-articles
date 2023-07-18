import { GreenText } from "../../Texts";
import { GreenButton } from "../../Buttons/GreenButton/GreenButton";
import { getTenNumber } from "../../../tools/numberFunctions";

function GreenSection() {
  const tenNum = getTenNumber();
  return (
    <>
      <GreenText>Green text component (Indirect import - Barrel)</GreenText>
      <GreenText>Green ten number: {tenNum}</GreenText>
      <GreenButton>Green button component (Direct import)</GreenButton>
    </>
  );
}

export default GreenSection;
