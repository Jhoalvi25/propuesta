import React from "react";
import styleH from "../../style/Home/Home.module.css";
import { useParams } from "react-router-dom";
import Content from "./Options/Content";
import Tools from "./Tools";
import Header from "./Header";


export default function Home() {
  const { options } = useParams();

  return (
    <div className={styleH["Home"]}>
      <Tools></Tools>
      <div className={styleH["home-content"]}>
        <Header></Header>
      {options === "content" ? <Content /> : null}

      </div>

      {/* <div className={styleH["title"]}>
        <h1 className={styleH["title-h1"]}>Nivel Primaria</h1>
      </div>

      <div className={styleH["title-p"]}>
        <Data information={information} />
      </div> */}
      
    </div>
  );
}
