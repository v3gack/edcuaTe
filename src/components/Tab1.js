import React from 'react';
import styles from "./App.module.css";
//import styles from "./Tab2.css";
import {useHistory} from "react-router-dom";
function Tab1() {
    let history = useHistory();
    return (
        <div> 
         <h1 className = {styles.title}>TEMAS</h1>
         < br/>< br/>
            <pre className = {styles.temas}>          SUMA +          RESTA -          MULTIPLICACION x          DIVISION %</pre>
            <button className = {styles.boton1} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 1 +
            </button>
            <button className = {styles.boton2} onClick ={
                ()=>{
                    history.push("/Leccion1");
                }
            }>
                Leccion 2 +
            </button>
            <button className = {styles.boton3} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 3 +
            </button>
            <button className = {styles.boton4} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 4 +
            </button>
            <button className = {styles.boton5} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 1 -
            </button>
            <button className = {styles.boton6} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 2 -
            </button>
            <button className = {styles.boton7} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 3 -
            </button>
            <button className = {styles.boton8} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 4 -
            </button>
            <button className = {styles.boton9} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 1 x
            </button>
            <button className = {styles.boton10} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 2 x
            </button>
            <button className = {styles.boton11} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 3 x
            </button>
            <button className = {styles.boton12} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 4 x
            </button>
            <button className = {styles.boton13} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 1 %
            </button>
            <button className = {styles.boton14} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 2 %
            </button>
            <button className = {styles.boton15} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 3 %
            </button>
            <button className = {styles.boton16} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 4 %
            </button>
        </div>
    )
}
export default Tab1;