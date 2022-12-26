import React from 'react';
import Information from './Information';

export default function Data({information}){
    return(
        <div>
             {information.map(i => <Information Alumno={i.Alumno} Apellido={i.Apellido} Edad={i.Edad}/>)}
        </div>
    )
}