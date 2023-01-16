import style from "../../style/Login_Register/Login.module.css";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import validationSchema from "./validation/validationLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialValues);
  // const [error ,setError] = useState({message: ''});

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setUser({ ...user, [inputName]: inputValue });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setUser(initialValues);
  };

  return (
    <div className={style["form-container"]}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <Form
          className={style["form-login"]}
          onChange={handleChange}
          onSubmit={handleLogin}
        >
          <h1>Sign in</h1>
          <label htmlFor="email" className={style["form__label"]}>
            Email
          </label>
          <Field
            name="email"
            type="text"
            className={style["form__input"]}
            value={user.email}
          />

          <ErrorMessage
            name="email"
            component="span"
            className={style["form__error"]}
          />

          <label htmlFor="password" className={style["form__label"]}>
            Password
          </label>
          <Field
            name="password"
            type="password"
            className={style["form__input"]}
            value={user.password}
          />

          <ErrorMessage
            name="password"
            component="span"
            className={style["form__error"]}
          />
          <Link to={"restore"} className={style["restore"]}>
            <span>Forgot pasword?</span>
          </Link>
          {/* {error.message && <p>{error.message}</p>} */}
          <Link to={"/home"} className={style["submit"]}>
            {" "}
            <button type="submit" className={style["login-btn"]}>
              Sign in
            </button>
          </Link>

          <div className={style["create-reference"]}>
            <span>No account?</span>
            <Link to={"register"}>
              <span className={style["link-create"]}> Create One</span>
            </Link>
          </div>
          <button type="button" className={style["login-google-btn"]}>
            <FontAwesomeIcon icon={faGoogle} />
            Sign in with Google
          </button>
        </Form>
      </Formik>
      <div className={style["aside-background"]}></div>
    </div>
  );
}
