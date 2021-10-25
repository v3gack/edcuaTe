import React from "react";
<<<<<<< Updated upstream:src/components/Tab2.js
import styles from './App.module.css';
import {useHistory} from "react-router-dom";
function Tab2(){
    let history = useHistory();
   return  (
   <div>
       <div className = {styles.video} align = "center" >
       <iframe  width="900" height="500" src="https://www.youtube.com/embed/ZVIjH58vrFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/Leccion1S");
                 }         
             }>
                🠔atras
            </button>
            <button className = {styles.VideoAnterior} onClick ={
                 ()=>{
                     history.push("/Tab1");
                 }         
             }>
                Video Anterior
            </button>
            <button className = {styles.VideoSiguiente} onClick ={
                 ()=>{
                     history.push("/Tab1");
                 }         
             }>
                Video Siguiente
            </button>
    </div>      
    );
=======
function videodiv1(){
   return  (<div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PCRCrdJbaCM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>);
>>>>>>> Stashed changes:src/components/videodiv1.js
}
export default videodiv1;
