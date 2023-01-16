import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import style from "../style/Footer.module.css"

export default function Footer() {
  return (
    <div className={style["footer"]}>
      <p>
        Copyright &copy; 2023 <b>Gimnasio Virtual San Francisco Javier</b> -
        Todos los derechos reservados.
      </p>
      <div className={style["redes"]}>
        <a href="https://www.facebook.com/GimnasioVirtualSanFranciscoJavier" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/gimnasiovirtual_sfj/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://twitter.com/gimvirtualsjf"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
