// import React from "r3act";
import styles from './App.module.css';
import {useHistory} from "react-router-dom";
function Leccion3mv1(){
    let history = useHistory();
   return  (<div>
       <h1 className = {styles.title}>LECCION3 - VIDEO1</h1><br/><br/>
       <ul  >
           <li className = {styles.punto}>
               <div className = {styles.video} >
       <iframe text-align = "center" src="https://www.youtube.com/embed/RZj2JNlJSy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </li>
       </ul>
        
        <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/Leccion3M");
                 }         
             }>
                🠔atras
            </button>
            {/* <button className = {styles.videoAnterior} onClick ={
                 ()=>{
                     history.push("/Leccion2mv1");
                 }         
             }>
                Video Anterior
            </button> */}
            <button className = {styles.videoSiguiente} onClick ={
                 ()=>{
                     history.push("/Leccion3mv2");
                 }         
             }>
                Video Siguiente
            </button>
    </div> 
    );
}
export default Leccion3mv1;