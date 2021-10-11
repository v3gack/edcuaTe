import styles from "./App.css";


/*import {BrowserRouter as Router, Switch, Route}*/

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import { PaginaV } from "./components/paginaV/PaginaV";

export function App() {
  return (
    <Router>
      <header>
        <h1 className = {styles.title}>Titulo</h1>
        <Link to="/">Home</Link>
        <Link to="/leccion2">Leccion2</Link>
      </header>
      <main>
        <Switch>
          <Route path="/leccion1">
            <PaginaV />
          </Route>
          <Route path="/leccion2">
            Leccion2
          </Route>
        </Switch>
      </main>
      
    </Router>
  );
}

export default App;
