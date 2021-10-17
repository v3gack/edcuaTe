import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import styles from './App.module.css';
import'bootstrap/dist/css/bootstrap.min.css'; 

import {useHistory} from "react-router-dom";

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

export default Leccion1;