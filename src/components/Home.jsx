import React from "react";
import styleH from '../style/Home.module.css';
import Data from "./Data";
import Contenido from "./Content";

const information = [{
    Alumno: 'Abimael',
    Apellido: 'Rueda Galindo',
    Edad: '26 años'
}];

export default function Home() {
    return (
        <div className={styleH['Home']}>
            <div className={styleH['title']}>
                <h1 className={styleH["title-h1"]}>Nivel Primaria</h1>
            </div>

            <div className={styleH['title-p']}>
                <Data information={information}/>
            </div>

            <Contenido/>
        </div>
    )
}