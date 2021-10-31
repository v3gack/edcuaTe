import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import styles from './App.module.css';
import'bootstrap/dist/css/bootstrap.min.css'; 

import {useHistory} from "react-router-dom";

    const Leccion4M = (props) => {
        const [dropDown, setDropdown] = useState(false);
        const abriCerrar = () => {setDropdown(!dropDown)}
        let history = useHistory();
       return (
                 <div className={styles.menu}> <br/><br/><br/><br/><br/>
                 <h1 className={styles.tituloSL2}>TEMA MULTIPLICACION - LECCION 4</h1>
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
                    history.push("/Leccion4mv1");
                    }
                }> Video1
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
                    history.push("/Leccion4mv2");
                     }
                }> Video2
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
                      history.push("/Leccion4mv3");
                     }
                    }> Video3
                </button>
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

export default Leccion4M;