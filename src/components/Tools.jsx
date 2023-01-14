import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBook,
  faVideo,
  faDumbbell,
  faFlaskVial,
  faSquareCheck
} from "@fortawesome/free-solid-svg-icons";
import style from "../style/Tools.module.css";

export default function Tools() {
  return (
    <div className={style["icon-bar"]}>
      <a href="#" className={style["active"]}>
        <FontAwesomeIcon icon={faBook} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faVideo} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faDumbbell} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFlaskVial} />
      </a>
      <a href="#">
      <FontAwesomeIcon icon={faSquareCheck}/>
      </a>
    </div>
  );
}
