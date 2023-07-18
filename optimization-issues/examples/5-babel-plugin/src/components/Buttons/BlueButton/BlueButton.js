import { Button } from "../Button/Button";
import "./BlueButton.css";

export function BlueButton(props) {
  return <Button className="BlueButton">{props.children}</Button>;
}
