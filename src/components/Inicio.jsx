import React from "react";
import { useHistory } from "react-router";
import Astro from "../images/astronauta.png";
import styleInicio from "./Inicio.module.css"

export function Inicio(){
    let history = useHistory();
    return(
        <div>
            <h1>
                EducaTe <br/>
                Matematicas de Primer grado
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
            <div className = {styleInicio.texto}>
                
                <img className = {styleInicio.astronauta} src={Astro} alt="Astronauta"/>
                
                   Bienvenidos a esta nueva aventura, aqui vas a aprender las matematicas de una forma mas divertida
                   preparate para un viaje espacial al mundo de las matematicas el cual tendras videos y juegos para entretenerte
                
            </div>
            <button className = {styleInicio.btt} onClick ={
                 ()=>{
                     history.push("/homepage");
                 }         
             }>
                Inicio sin Sesión
            </button>
        </div>
    );
}