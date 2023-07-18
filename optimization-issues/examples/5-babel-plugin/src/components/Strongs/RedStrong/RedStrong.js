import { Strong } from "../Strong/Strong";
import "./RedStrong.css";

export function RedStrong(props) {
  return <Strong className="RedStrong">{props.children}</Strong>;
}
