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
import styleContent from '../style/Content.module.css'

export default function Content() {
    function mostrar1() {
        document.getElementById(styleContent.img1).style.display = 'block';
    }
    function ocultar1() {
        document.getElementById(styleContent.img1).style.display = 'none';
    }
    function mostrar3() {
        document.getElementById(styleContent.img3).style.display = 'block';
    }
    function ocultar3() {
        document.getElementById(styleContent.img3).style.display = 'none';
    }
    function mostrar4() {
        document.getElementById(styleContent.img4).style.display = 'block';
    }
    function ocultar4() {
        document.getElementById(styleContent.img4).style.display = 'none';
    }
    function mostrar6() {
        document.getElementById(styleContent.img6).style.display = 'block';
    }
    function ocultar6() {
        document.getElementById(styleContent.img6).style.display = 'none';
    }
    function mostrar7() {
        document.getElementById(styleContent.img7).style.display = 'block';
    }
    function ocultar7() {
        document.getElementById(styleContent.img7).style.display = 'none';
    }
    function mostrar8() {
        document.getElementById(styleContent.img8).style.display = 'block';
    }
    function ocultar8() {
        document.getElementById(styleContent.img8).style.display = 'none';
    }
    function mostrar9() {
        document.getElementById(styleContent.img9).style.display = 'block';
    }
    function ocultar9() {
        document.getElementById(styleContent.img9).style.display = 'none';
    }
    function mostrar10() {
        document.getElementById(styleContent.img10).style.display = 'block';
    }
    function ocultar10() {
        document.getElementById(styleContent.img10).style.display = 'none';
    }
    function mostrar11() {
        document.getElementById(styleContent.img11).style.display = 'block';
    }
    function ocultar11() {
        document.getElementById(styleContent.img11).style.display = 'none';
    }
    function mostrar12() {
        document.getElementById(styleContent.img12).style.display = 'block';
    }
    function ocultar12() {
        document.getElementById(styleContent.img12).style.display = 'none';
    }
    function mostrar13() {
        document.getElementById(styleContent.img13).style.display = 'block';
    }
    function ocultar13() {
        document.getElementById(styleContent.img13).style.display = 'none';
    }
    return (
        <div className="linea">
            <div className="content">
                <h1>Ciencias Naturales</h1>
                <h4>3er Grado</h4>
            </div>
            <center>
                <div className='tema'>
                    <p id="boton" onClick={mostrar1}> Bienvenida</p>
                    <button id="boton" onClick={mostrar1}>Mostrar</button>
                </div>
                <div id={styleContent.img1}>
                    <button id="boton" onClick={ocultar1}>Ocultar</button>
                    <img src={imagen1} width="800px" alt="" />
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar3}> Conocenos </h1>
                    <button id="boton" onClick={mostrar3}>Mostrar</button>
                    <div id={styleContent.img3}>
                        <button id="boton" onClick={ocultar3}>Ocultar</button>
                        <img src={imagen3} width="800px" alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar4}> Energía en Movimiento </h1>
                    <button id="boton" onClick={mostrar4}>Mostrar</button>
                    <div id={styleContent.img4}>
                        <button id="boton" onClick={ocultar4}>Ocultar</button>
                        <img src={imagen4} width="800px" alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar6}> La luz es una manifestación de la energía </h1>
                    <button id="boton" onClick={mostrar6}>Mostrar</button>
                    <div id={styleContent.img6}>
                        <button id="boton" onClick={ocultar6}>Ocultar</button>
                        <img src={imagen6} width="800px" alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar7}> Propiedad de la Luz </h1>
                    <button id="boton" onClick={mostrar7}>Mostrar</button>
                    <div id={styleContent.img7}>
                        <button id="boton" onClick={ocultar7}>Ocultar</button>
                        <img src={imagen7} width="800px" alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar8}> El Movimiento </h1>
                    <button id="boton" onClick={mostrar8}>Mostrar</button>
                    <div id={styleContent.img8}>
                        <button id="boton" onClick={ocultar8}>Ocultar</button>
                        <img src={imagen8} width="800px" alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar9}> El sol fuente de energía del Sistema Solar </h1>
                    <button id="boton" onClick={mostrar9}>Mostrar</button>
                    <div id={styleContent.img9}>
                        <button id="boton" onClick={ocultar9}>Ocultar</button>
                        <img src={imagen9} width="800px" alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar10}> Los eclipses </h1>
                    <button id="boton" onClick={mostrar10}>Mostrar</button>
                    <div id={styleContent.img10}>
                        <button id="boton" onClick={ocultar10}>Ocultar</button>
                        <img src={imagen10} width="800px" alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar11}> Eclipse Lunar </h1>
                    <button id="boton" onClick={mostrar11}>Mostrar</button>
                    <div id={styleContent.img11}>
                        <button id="boton" onClick={ocultar11}>Ocultar</button>
                        <img src={imagen11} width="800px" alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar12}> Glosario </h1>
                    <button id="boton" onClick={mostrar12}>Mostrar</button>
                    <div id={styleContent.img12}>
                        <button id="boton" onClick={ocultar12}>Ocultar</button>
                        <img src={imagen12} width="800px" alt="" />
                    </div>
                </div>
                <div>
                    <h1 id="boton" onClick={mostrar13}> Bibliografía </h1>
                    <button id="boton" onClick={mostrar13}>Mostrar</button>
                    <div id={styleContent.img13}>
                        <button id="boton" onClick={ocultar13}>Ocultar</button>
                        <img src={imagen13} width="800px" alt="" />
                    </div>
                </div>
            </center>
        </div>
    )
}