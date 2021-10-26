import React, { useState } from 'react';
<<<<<<< HEAD
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
=======
import { Dropdown, DropdownToggle, DropdownMenu,} from 'reactstrap';
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
import styles from './App.module.css';
import'bootstrap/dist/css/bootstrap.min.css'; 

import {useHistory} from "react-router-dom";

<<<<<<< HEAD
    const Leccion1 = (props) => {
        const [dropDown, setDropdown] = useState(false);
        const abriCerrar = () => {setDropdown(!dropDown)}
        let history = useHistory();
        return (
            <div className={styles.menu}> 
                <br /><pre className = {styles.tituloSL2}>                                TEMA SUMA - LECION 2</pre>
                <button className = {styles.botonAtras} onClick ={
                ()=>{
                    history.push("/Tab1");
                }
            }>
                Atras
            </button>
             <Dropdown isOpen={!dropDown} toggle={abriCerrar} direction="right">
            
                <DropdownToggle caret className={styles.BotonDrop} > 
                    VIDEOS 
                </DropdownToggle >
            
                <DropdownMenu className="item"> 
                    <button className ={styles.botonVideoSuma2} onClick ={
                        ()=>{
                        history.push("/Tab2");
                        }
                    }> Video1
                    </button>
                    <button className ={styles.botonVideoSuma2} onClick ={
                         ()=>{
                        history.push("/Tab2");
                         }
                    }> Video2
                    </button>
                    <button className ={styles.botonVideoSuma2} onClick ={
                         ()=>{
                          history.push("/Tab2");
                         }
                        }> Video3
                    </button>
=======
    const Leccion1S = (props) => {
        const [dropDown, setDropdown] = useState(false);
        const abriCerrar = () => {setDropdown(!dropDown)}
        let history = useHistory();
       return (
                 <div className={styles.menu}> <br/><br/><br/>
                 <h1 className={styles.tituloSL2}>TEMA SUMA - LECCION 1</h1>
                 <button className = {styles.botonAtras} onClick ={
                 ()=>{
                     history.push("/Tab1");
                 }         
             }>
                🠔atras
            </button>
                  
            <Dropdown isOpen={!dropDown} toggle={abriCerrar} direction="right">
            
            <DropdownToggle caret className={styles.BotonDrop} > 
                VIDEOS 
            </DropdownToggle >
            
            <DropdownMenu className={styles.desplegable}> 
            
                <button className ={styles.botonVideoSuma2} onClick ={
                    ()=>{
                    history.push("/Leccion1sv1");
                    }
                }> Video1
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
                    history.push("/Leccion1sv2");
                     }
                }> Video2
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
                      history.push("/Leccion1sv3");
                     }
                    }> Video3
                </button>
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
              {/* <DropdownItem>Video 1</DropdownItem>
              <DropdownItem>Video 2</DropdownItem>
              <DropdownItem>Video 3</DropdownItem>
              <DropdownItem>Video 4</DropdownItem>
              <DropdownItem>Video 5</DropdownItem> */}
            
            </DropdownMenu>
           </Dropdown>
          </div>
        );
      }

<<<<<<< HEAD
export default Leccion1;
=======
export default Leccion1S;
>>>>>>> ef5ea8a3f220fc024f6125bec24430bfa0a13368
