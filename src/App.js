//import styles from "./App.css";
import styles from "./App.module.css";

/*import {BrowserRouter as Router, Switch, Route}*/

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import { PaginaV } from "./components/paginaV/PaginaV";
//import { Cover } from "./components/Cover";

export function App() {
  return (
   
    <Router>
      <header>
         <h1 className = {styles.title}>TEMAS</h1>
         < br/>< br/>
            <pre className = {styles.temas}>             SUMA                 RESTA                  MULTIPLICACION                    DIVISION</pre>
         <Link className = {styles.boton1} to="/leccion1S">S LECCION 1 </Link>
         <Link className = {styles.boton2} to="/leccion2S">S LECCION 2</Link>
         <Link className = {styles.boton3} to="/leccion3S">S LECCION 3</Link>
         <Link className = {styles.boton4} to="/leccion4S">S LECCION 4</Link>
         <Link className = {styles.boton5} to="/leccion1R">R LECCION 1</Link>
         <Link className = {styles.boton6} to="/leccion2R">R LECCION 2</Link>
         <Link className = {styles.boton7} to="/leccion3R">R LECCION 3</Link>
         <Link className = {styles.boton8} to="/leccion4R">R LECCION 4</Link>
         <Link className = {styles.boton9} to="/leccion1M">M LECCION 1</Link>
         <Link className = {styles.boton10} to="/leccionM2">M LECCION 2</Link>
         <Link className = {styles.boton11} to="/leccionM3">M LECCION 3</Link>
         <Link className = {styles.boton12} to="/leccionM4">M LECCION 4</Link>
         <Link className = {styles.boton13} to="/leccion1D">D LECCION 1</Link>
         <Link className = {styles.boton14} to="/leccion2D">D LECCION 2</Link>
         <Link className = {styles.boton15} to="/leccion3D">D LECCION 3</Link>
         <Link className = {styles.boton16} to="/leccion4D">D LECCION 4</Link> 
        {/* <Link to="/leccion1">suma</Link>
        <Link to="/leccion2">Resta</Link> */}
      </header>
      <main>
        <Switch>
          <Route exact path="/leccion1S">
             <PaginaV /> 
          </Route>
          <Route path="/leccion2S">
            {/* <PaginaV /> */} adios
          </Route>
          <Route path = "/leccion3S">

          </Route>
          <Route path = "/leccion4S">
            
          </Route>
          <Route path = "/leccion1R">
            
          </Route>
          <Route path = "/leccion2R">
            
          </Route>
          <Route path = "/leccion3R">
            
          </Route>
          <Route path = "/leccion4R">
            
          </Route>
          <Route path = "/leccion1M">
            
          </Route>
          <Route path = "/leccion2M">
            
          </Route>
          <Route path = "/leccion3M">
            
          </Route>
          <Route path = "/leccion4M">
            
          </Route>
          <Route path = "/leccion1D">
            
          </Route>
          <Route path = "/leccion2D">
            
          </Route>
          <Route path = "/leccion3D">
            
          </Route>
          <Route path = "/leccion4D">
            
          </Route>
        </Switch>
      </main>
      

    </Router>
  );
}

