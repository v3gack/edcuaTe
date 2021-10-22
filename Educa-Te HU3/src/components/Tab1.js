import React from 'react';
import styles from "./App.module.css";
//import styles from "./Tab2.css";
import {useHistory} from "react-router-dom";
function Tab1() {
    let history = useHistory();
    return (
        <div> 
         <h1 className = {styles.title}>TEMAS</h1>
         <div className = {styles.temas}>
              <h2>SUMA +</h2>
              <h2>RESTA -</h2>
              <h2>MULTIPLICACION *</h2>
              <h2>DIVISION %</h2>
         </div>
         
            <button className = {styles.boton1} onClick ={
                ()=>{
                    history.push("/Leccion1S");
                }
            }>
                Leccion 1 +
            </button>
            <button className = {styles.boton2} onClick ={
                ()=>{
                    history.push("/Leccion2S");
                }
            }>
                Leccion 2 +
            </button>
            <button className = {styles.boton3} onClick ={
                ()=>{
                    history.push("/Leccion3S");
                }
            }>
                Leccion 3 +
            </button>
            <button className = {styles.boton4} onClick ={
                ()=>{
                    history.push("/Leccion4S");
                }
            }>
                Leccion 4 +
            </button>
            
            
            <button className = {styles.boton5} onClick ={
                ()=>{
                    history.push("/Leccion1R");
                }
            }>
                Leccion 1 -
            </button>
            <button className = {styles.boton6} onClick ={
                ()=>{
                    history.push("/Leccion2R");
                }
            }>
                Leccion 2 -
            </button>
            <button className = {styles.boton7} onClick ={
                ()=>{
                    history.push("/Leccion3R");
                }
            }>
                Leccion 3 -
            </button>
            <button className = {styles.boton8} onClick ={
                ()=>{
                    history.push("/Leccion4R");
                }
            }>
                Leccion 4 -
            </button>
            
            
            <button className = {styles.boton9} onClick ={
                ()=>{
                    history.push("/Leccion1M");
                }
            }>
                Leccion 1 *
            </button>
            <button className = {styles.boton10} onClick ={
                ()=>{
                    history.push("/Leccion2M");
                }
            }>
                Leccion 2 *
            </button>
            <button className = {styles.boton11} onClick ={
                ()=>{
                    history.push("/Leccion3M");
                }
            }>
                Leccion 3 *
            </button>
            <button className = {styles.boton12} onClick ={
                ()=>{
                    history.push("/Leccion4M");
                }
            }>
                Leccion 4 *
            </button>
            
            
            <button className = {styles.boton13} onClick ={
                ()=>{
                    history.push("/Leccion1D");
                }
            }>
                Leccion 1 %
            </button>
            <button className = {styles.boton14} onClick ={
                ()=>{
                    history.push("/Leccion2D");
                }
            }>
                Leccion 2 %
            </button>
            <button className = {styles.boton15} onClick ={
                ()=>{
                    history.push("/Leccion3D");
                }
            }>
                Leccion 3 %
            </button>
            <button className = {styles.boton16} onClick ={
                ()=>{
                    history.push("/Leccion4D");
                }
            }>
                Leccion 4 %
            </button>
            
        </div>
    )
}
export default Tab1;