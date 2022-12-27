import React from "react";
import { Link } from "react-router-dom";
import style from "../style/Login.module.css";
import videoBg from "../img/Backgrounds/vecteezy_modern-isometric-business-infographic-concept_3582995.mp4";
import Home from "./Home";

export default function Login() {
  return (
    <div className={style.content}>
      <video src={videoBg} autoPlay loop muted />

      <div className={style["login-box"]}>
        <h1>Login Here</h1>
        <form>
          <label for="username">Username</label>

          <input type="text" placeholder="Username" />
          <label for="password">Password</label>

          <input type="password" placeholder="Enter Password" />

          <Link to={"/home"}>
            <input type="submit" value="Log In" />
          </Link>

          <Link to="/password">
            <a href="/password" target="_blank" rel="noreferrer noopener">
              Lost your Password?
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
}
