import stylesDiv from "./LecDivision.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export function LecMultiplicacion(){
    return (
    <Router>
    <ul className = {stylesDiv.niveles}>
        <li>
        <Link className = {stylesDiv.sub} to ="/">
    Nivel Semilla 
    </Link>
        </li>
<li>
<Link className = {stylesDiv.sub} to ="/">
    Nivel Brote
    </Link>
</li>

<li>
<Link className = {stylesDiv.sub} to ="/suma">
     Nivel Planta
    </Link>
</li>
<li>
<Link className = {stylesDiv.sub} to ="/suma">
     Nivel Arbol
    </Link>
</li>
  </ul>
  <ul>
      <li>
          <div>
          <iframe align ="center" src="https://www.youtube.com/embed/cPYTM9O_WEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </li>
  </ul>
  </Router>
  );
}