import React from "react";

export default function NavBar(){
    return(
        <nav>
            <a href="#" className="logo">Logo</a>
            <div>
                <ul>
                    <li><a>Contenido</a></li>
                    <li><a>Ejercicios</a></li>
                    <li><a>Vídeos</a></li>
                    <li><a>Exámenes</a></li>
                </ul>
            </div>
        </nav>
    )
}
