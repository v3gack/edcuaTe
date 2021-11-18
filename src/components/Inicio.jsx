import React from "react";
import { useHistory } from "react-router";
import Astro from "../images/astronauta.png";
import styleInicio from "./Inicio.module.css";

export function Inicio() {
  let history = useHistory();
  return (
    <div>
      <h1>
        EducaTe <br />
        Matematicas de 1er Grado
      </h1>
      {/* <pre>esto es una prueba
                erwe
            </pre> */}
      {/* <button className = {styleInicio.btt} onClick ={
                 ()=>{
                     history.push("/homepage");
                 }         
             }>
                Inicio sin Sesión
            </button> */}
      <div className={styleInicio.texto}>
        <img className={styleInicio.astronauta} src={Astro} alt="Astronauta" />

        <div className={styleInicio.texto2}>
        Esta pagina te servirá para reforzar y profundizar en el mundo de las matemáticas. 
        Aquí encontraras actividades divertidas y variadas. Entre estas te podemos ofrecer videos, practicas y juegos para que puedas estimular tus conocimientos. 
        Te invitamos a aceptar este desafío, que te ayudará en el aprendizaje de las Matemáticas.
        </div>
      </div>
      <button
        className={styleInicio.btt}
        onClick={() => {
          history.push("/homepage");
        }}
      >
        Inicio sin Sesión
      </button>
    </div>
  );
}
