import React from 'react';
import styles from "./App.module.css";
//import styles from "./Tab2.css";
import {useHistory} from "react-router-dom";
function Leccion2S() {
    let history = useHistory();
    return (
        <div> 
         <h1 className = {styles.title}>TEMAS</h1>
         < br/>< br/>
            <pre className = {styles.temas}>             SUMA                 RESTA                  MULTIPLICACION                    DIVISION</pre>
            <button className = {styles.boton2} onClick ={
                ()=>{
                    history.push("/Tab2");
                }
            }>
                Leccion 2 Suma
            </button>
        </div>
    )
}
export default Leccion2S;