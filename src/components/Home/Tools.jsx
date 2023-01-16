import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faVideo,
  faDumbbell,
  faFlaskVial,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import style from "../../style/Home/Tools.module.css";

export default function Tools() {
  return (
    <div className={style["icon-bar"]}>
      <div className={style["options"]}>
        <Link to="home/content" className={style["active"]}>
          <FontAwesomeIcon icon={faBook} />
        </Link>
        <Link to="home/videos">
          <FontAwesomeIcon icon={faVideo} />
        </Link>
        <Link to="home/exercise">
          <FontAwesomeIcon icon={faDumbbell} />
        </Link>
        <Link to="home/test">
          <FontAwesomeIcon icon={faFlaskVial} />
        </Link>
        <Link to="home/">
          <FontAwesomeIcon icon={faSquareCheck} />
        </Link>
      </div>
    </div>
  );
}
