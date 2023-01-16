import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "../../style/Login_Register/Register.module.css";
import { Link } from "react-router-dom";
import validationSchema from "./validation/validationRegister";
import sideAnimeImg from "../../img/Backgrounds/69673051_2529082770656771_7130725060375315084_n.jpg";

export default function Register() {
  const initialValues = {
    name: "",
    age: 0,
    email: "",
    password: "",
    changePassword: "",
  };

  const [user, setUser] = useState(initialValues);
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setUser({ ...user, [inputName]: inputValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Check your email for account verification!");
    setUser({
      name: "",
      age: 0,
      email: "",
      password: "",
      changePassword: "",
    });
    // No se esta seteando correctamente los inputs a su valor inicial
    // CHEQUEAR QUE FUNCIONE
  };
  return (
    <div className={style["form-signup-container"]}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form
          className={style["form-signup"]}
          onChange={handleChange}
          onSubmit={handleSubmit}
        >
          <h1>Sign up</h1>
          <label htmlFor="name" className={style["form__label"]}>
            Name
          </label>
          <Field name="name" type="text" className={style["form__input"]} />

          <ErrorMessage
            name="name"
            component="span"
            className={style["form__error"]}
          />

          <label htmlFor="age" className={style["form__label"]}>
            Age
          </label>
          <Field name="age" type="number" className={style["form__input"]} />

          <ErrorMessage
            name="age"
            component="span"
            className={style["form__error"]}
          />

          <label htmlFor="email" className={style["form__label"]}>
            Email
          </label>
          <Field name="email" type="text" className={style["form__input"]} />

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
          />

          <ErrorMessage
            name="password"
            component="span"
            className={style["form__error"]}
          />

          <label htmlFor="changePassword" className={style["form__label"]}>
            Confirm Password
          </label>
          <Field
            name="changePassword"
            type="password"
            className={style["form__input"]}
          />

          <ErrorMessage
            name="changePassword"
            component="span"
            className={style["form__error"]}
          />
          <button type="submit" className={style["signup-btn"]}>
            Sign up
          </button>
          <p style={{ marginBottom: "2em" }}>
            Already have an account?{" "}
            <Link to={"/"} className={style["link"]}>
              <span>Log In</span>
            </Link>
          </p>
        </Form>
      </Formik>
      <div className={style["aside-background"]}>
        <img
          src={sideAnimeImg}
          alt="anime img"
          className={style["anime-img"]}
        />
      </div>
    </div>
  );
}
