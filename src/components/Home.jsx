import React from "react";
import styleH from '../style/Home.module.css';
import Content from "./Content";
import Data from "./Data";
import NavBar from "./NavBar";
import Contenido from "./Content";

const information = [{
    Alumno: 'Abimael',
    Apellido: 'Rueda Galindo',
    Edad: '26 años'
}];

export default function Home() {
    return (
        <div className={styleH['Home']}>
            <NavBar/>
            <div className={styleH['title']}>
                <h1 className={styleH["title-h1"]}>Nivel Primaria</h1>
            </div>

            <div className={styleH['title-p']}>
                <Data information={information}/>
            </div>

            <Contenido/>

            <button className={styleH['button-h']}>Contenido</button>
            <button className={styleH['button-h']}>Vídeo</button>
            <button className={styleH['button-h']}>Ejercicios</button>
            <button className={styleH['button-h']}>Examen</button>
        </div>
    )
}