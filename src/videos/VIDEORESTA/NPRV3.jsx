import React from "react";
import styles from './video.module.css';
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
export function NPRV3(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>NIVEL PLANTA - RESTA</h1>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe text-align = "center" src="https://www.youtube.com/embed/Fx_kHr92VgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/LecRNP");
                 }         
             }>
                🠔atras
            </button>
            <button className = {styles.videoAnterior} onClick ={
                 ()=>{
                     history.push("/NPRV2");
                 }         
             }>
                Video Anterior
            </button> 
            {/* <button className = {styles.videoSiguiente} onClick ={
                 ()=>{
                     history.push("/NPRV2");
                 }         
             }>
                Video Siguiente
            </button> */}
    </div> 
    );
}