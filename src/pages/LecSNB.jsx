import React from "react";
import Juego from "../images/juego1.png";
import Practica from "../images/practica.png";
import Video from "../images/video1.png";

import stylesDiv from "./LecDivision.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {useHistory} from "react-router-dom";

export function LecSNB(){
  let history = useHistory();
    return (
    <main>
    <ul className = {stylesDiv.niveles}>
        <li>
        <Link className = {stylesDiv.sub} to ="/suma" onClick ={
                 ()=>{
                     history.push("/suma");
                 }         
             }>
          Nivel Semilla 
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.semilla} to ="/LecSNB" onClick ={
                 ()=>{
                     history.push("/LecSNB");
                 }         
             }>
          Nivel Brote
        </Link>
        </li>

        <li>
        <Link className = {stylesDiv.sub} to ="/LecSNP" onClick ={
                 ()=>{
                     history.push("/LecSNP");
                 }         
             }>
          Nivel Planta
        </Link>
        </li>
        <li>
        <Link className = {stylesDiv.sub} to ="/LecSNA" onClick ={
                 ()=>{
                     history.push("/LecSNB");
                 }         
             }>
            Nivel Árbol
        </Link>
        </li>
    </ul>
    <button className = {stylesDiv.botonAtras} onClick ={
                 ()=>{
                     history.push("/homepage");
                 }         
             }>
                🠔atrás
            </button>
    <ul className={stylesDiv.LeccionGrid}>
        <li>
          
          <Link to = "/JuegoSumaB" onClick ={
                 ()=>{
                     history.push("/JuegoSumaB");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Juego} alt="juego" />
          </Link>
        </li>
        <li>
          <Link to="/PSB" onClick={
            ()=>{
              history.push("/PSB");
            }
          }>
            <img className={stylesDiv.ImgStyle} src={Practica} alt="practicas" />
          </Link>
        </li>
        <li>
          <Link to="/NBSV1" onClick ={
                 ()=>{
                     history.push("/NBSV1");
                 }         
             }>
            <img className={stylesDiv.ImgStyle} src={Video} alt="video" />
          </Link>
        </li>
      </ul>
      </main>
  );
}