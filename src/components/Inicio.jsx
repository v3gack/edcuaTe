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
                
                   <div className = {styleInicio.texto2}>Bienvenidos a esta nueva aventura, aquí vas a aprender las matemáticas de una forma mas divertida prepárate 
                       para un viaje espacial al mundo de las matemáticas el cual tendrás y juegos para entretenerte</div>
                 
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