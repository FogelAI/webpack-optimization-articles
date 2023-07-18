import { RedText } from "../../Texts";
import { RedButton } from "../../Buttons/RedButton/RedButton";
import { getThousandNumber } from "../../../tools/numberFunctions/numberFunctions";

function RedSection() {
  const thousandNum = getThousandNumber();
  return (
    <>
      <RedText>Red text component (Indirect import - Barrel)</RedText>
      <RedText>Red thousand number: {thousandNum}</RedText>
      <RedButton>Red button component (Direct import)</RedButton>
    </>
  );
}

export default RedSection;
