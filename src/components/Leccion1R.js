import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import styles from './App.module.css';
import'bootstrap/dist/css/bootstrap.min.css'; 

import {useHistory} from "react-router-dom";

    const Leccion1R = (props) => {
        const [dropDown, setDropdown] = useState(false);
        const abriCerrar = () => {setDropdown(!dropDown)}
        let history = useHistory();
       return (
                 <div className={styles.menu}> 
<<<<<<< Updated upstream
                 <h1 className={styles.tituloSL2}>TEMA RESTA - LECCION 1</h1>
=======
                 <h1 className={styles.tituloSL2}>TEMA RESTA - LECCIÓN 1</h1>
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
                    history.push("/Tab2");
=======
                    history.push("/videoresta1");
>>>>>>> Stashed changes
                    }
                }> Video1
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
<<<<<<< Updated upstream
                    history.push("/Tab2");
=======
                    history.push("/videoresta2");
>>>>>>> Stashed changes
                     }
                }> Video2
                </button>
                <button className ={styles.botonVideoSuma2} onClick ={
                     ()=>{
<<<<<<< Updated upstream
                      history.push("/Tab2");
=======
                      history.push("/videoresta3");
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

export default Leccion1R;