import React from 'react';
import imagen1 from '../img/Content/1-1.jpg'
import imagen3 from '../img/Content/1-3.jpg'
import imagen4 from '../img/Content/1-4.jpg'
import imagen6 from '../img/Content/1-6.jpg'
import imagen7 from '../img/Content/1-7.jpg'
import imagen8 from '../img/Content/1-8.jpg'
import imagen9 from '../img/Content/1-9.jpg'
import imagen10 from '../img/Content/1-10.jpg'
import imagen11 from '../img/Content/1-11.jpg'
import imagen12 from '../img/Content/1-12.jpg'
import imagen13 from '../img/Content/1-13.jpg'

export default function Content() {
    return (
        <div className="content">
            <h1>Ciencias Naturales</h1>
            <h4>3er Grado</h4>
            <div>
                <ul>
                    <li>Bienvenida
                        <button> Contenido
                            <img src={imagen1} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>Conocenos
                        <button> Contenido
                            <img src={imagen3} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>Energía en Movimiento
                        <button> Contenido
                            <img src={imagen4} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>La luz es una manifestación de la energía
                        <button> Contenido
                            <img src={imagen6} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>Propiedad de la Luz
                        <button> Contenido
                            <img src={imagen7} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>El Movimiento
                        <button> Contenido
                            <img src={imagen8} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>El sol fuente de energía del Sistema Solar
                        <button> Contenido
                            <img src={imagen9} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>Los eclipses
                        <button> Contenido
                            <img src={imagen10} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>Eclipse Lunar
                        <button> Contenido
                            <img src={imagen11} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>Glosario
                        <button> Contenido
                            <img src={imagen12} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                    <li>Bibliografía
                        <button> Contenido
                            <img src={imagen13} alt="img" width="800vw" height="650vw" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}