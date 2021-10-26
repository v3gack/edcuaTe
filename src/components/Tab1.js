import React from 'react';
import styles from "./App.module.css";
//import styles from "./Tab2.css";
import {useHistory} from "react-router-dom";
function Tab1() {
    let history = useHistory();
    return (
        <div> 
         <h1 className = {styles.title}>TEMAS</h1>
<<<<<<< HEAD
         < br/>< br/>
            <pre className = {styles.temas}>          SUMA +          RESTA -          MULTIPLICACION x          DIVISION %</pre>
            <button className = {styles.boton1} onClick ={
                ()=>{
                    history.push("/Leccion1");
=======
         <div className = {styles.temas}>
              <h2>SUMA +</h2>
              <h2>RESTA -</h2>
              <h3>MULTIPLICACION *</h3>
              <h3>DIVISION %</h3>
         </div>
         
            <button className = {styles.boton1} onClick ={
                ()=>{
                    history.push("/Leccion1S");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 1 +
            </button>
            <button className = {styles.boton2} onClick ={
                ()=>{
<<<<<<< HEAD
                    history.push("/Leccion1");
=======
                    history.push("/Leccion2S");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 2 +
            </button>
            <button className = {styles.boton3} onClick ={
                ()=>{
<<<<<<< HEAD
                    history.push("/Leccion1");
=======
                    history.push("/Leccion3S");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 3 +
            </button>
            <button className = {styles.boton4} onClick ={
                ()=>{
<<<<<<< HEAD
                    history.push("/Leccion1");
=======
                    history.push("/Leccion4S");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 4 +
            </button>
<<<<<<< HEAD
            <button className = {styles.boton5} onClick ={
                ()=>{
                    history.push("/Leccion1");
=======
            
            
            <button className = {styles.boton5} onClick ={
                ()=>{
                    history.push("/Leccion1R");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 1 -
            </button>
            <button className = {styles.boton6} onClick ={
                ()=>{
<<<<<<< HEAD
                    history.push("/Leccion1");
=======
                    history.push("/Leccion2R");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 2 -
            </button>
            <button className = {styles.boton7} onClick ={
                ()=>{
<<<<<<< HEAD
                    history.push("/Leccion1");
=======
                    history.push("/Leccion3R");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 3 -
            </button>
            <button className = {styles.boton8} onClick ={
                ()=>{
<<<<<<< HEAD
                    history.push("/Leccion1");
=======
                    history.push("/Leccion4R");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 4 -
            </button>
<<<<<<< HEAD
            <button className = {styles.boton9} onClick ={
                ()=>{
                    history.push("/Leccion1");
                }
            }>
                Leccion 1 x
            </button>
            <button className = {styles.boton10} onClick ={
                ()=>{
                    history.push("/Leccion1");
                }
            }>
                Leccion 2 x
            </button>
            <button className = {styles.boton11} onClick ={
                ()=>{
                    history.push("/Leccion1");
                }
            }>
                Leccion 3 x
            </button>
            <button className = {styles.boton12} onClick ={
                ()=>{
                    history.push("/Leccion1");
                }
            }>
                Leccion 4 x
            </button>
            <button className = {styles.boton13} onClick ={
                ()=>{
                    history.push("/Leccion1");
=======
            
            
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
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 1 %
            </button>
            <button className = {styles.boton14} onClick ={
                ()=>{
<<<<<<< HEAD
                    history.push("/Leccion1");
=======
                    history.push("/Leccion2D");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 2 %
            </button>
            <button className = {styles.boton15} onClick ={
                ()=>{
<<<<<<< HEAD
                    history.push("/Leccion1");
=======
                    history.push("/Leccion3D");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 3 %
            </button>
            <button className = {styles.boton16} onClick ={
                ()=>{
<<<<<<< HEAD
                    history.push("/Leccion1");
=======
                    history.push("/Leccion4D");
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
                }
            }>
                Leccion 4 %
            </button>
<<<<<<< HEAD
=======
            
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
        </div>
    )
}
export default Tab1;