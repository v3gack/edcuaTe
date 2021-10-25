import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import styles from './App.module.css';
import'bootstrap/dist/css/bootstrap.min.css'; 

import {useHistory} from "react-router-dom";

<<<<<<< Updated upstream
    const Leccion2S = (props) => {
=======
    const Leccion1 = (props) => {
>>>>>>> Stashed changes
        const [dropDown, setDropdown] = useState(false);
        const abriCerrar = () => {setDropdown(!dropDown)}
        let history = useHistory();
       return (
                 <div className={styles.menu}> 
<<<<<<< Updated upstream
                 <h1 className={styles.tituloSL2}>TEMA SUMA - LECCION 2</h1>
=======
                 <h1 className={styles.tituloSL2}>SUMA - LECCION 2</h1>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    history.push("/Leccion1sv2");
=======
                    history.push("/videosuma21");
>>>>>>> Stashed changes
                    }
                }> Video1
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
<<<<<<< Updated upstream
                    history.push("/Tab2s2");
=======
                    history.push("/videosuma22");
>>>>>>> Stashed changes
                     }
                }> Video2
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
<<<<<<< Updated upstream
                      history.push("/Tab2s2");
=======
                      history.push("/videosuma23");
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
export default Leccion2S;
=======
export default Leccion1;
>>>>>>> Stashed changes
