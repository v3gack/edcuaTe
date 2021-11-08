import { HomePage } from "./components/HomePage";
import { LecSuma } from "./pages/LecSuma";
import { LecResta } from "./pages/LecResta";
import { LecMultiplicacion } from "./pages/LecMultiplicacion";
import { LecDivision } from "./pages/LecDivision";
import {NivelSemillaSumaV1} from "./videos/NivelSemillaSumaV1";
import stylesApp from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import suma from "./images/EducateLOGO.png";
import { Inicio } from "./components/Inicio";
import { LecSNB } from "./pages/LecSNB";
import { LecSNP } from "./pages/LecSNP";
import { LecSNA } from "./pages/LecSNA";
import {NivelSSV2} from "./videos/NivelSSV2"
import {NivelSSV3} from "./videos/NivelSSV3"
import { NBSV1 } from "./videos/NBSV1";
import { NBSV3 } from "./videos/NBSV3";
import { NBSV2 } from "./videos/NBSV2";

export function App() {
  return (
    <Router>
      <header className = {stylesApp.test}>
        <Link to ="/">
        <img className={stylesApp.logo} src={suma} alt="Suma" />
        </Link>
      </header>
      <main>
        <Switch>
        <Route path="/NivelSemillaSumaV1">
            <NivelSemillaSumaV1/>
          </Route>
          <Route path="/suma">
            <LecSuma/>
          </Route>
          <Route path="/resta">
            <LecResta/>
          </Route>
          <Route path="/multiplicacion">
            <LecMultiplicacion/>
          </Route>
          <Route path="/division">
            <LecDivision/>
          </Route>
          <Route path ="/homepage">
            <HomePage/>
          </Route>
          <Route path ="/LecSNB">
            <LecSNB/>
          </Route>
          <Route path ="/LecSNP">
            <LecSNP/>
          </Route>
          <Route path ="/LecSNA">
            <LecSNA/>
          </Route>
          <Route path ="/NivelSSV2">
            <NivelSSV2/>
          </Route>
          <Route path ="/NivelSSV3">
            <NivelSSV3/>
          </Route>
          <Route path ="/NBSV1">
            <NBSV1/>
          </Route>
          <Route path ="/NBSV2">
            <NBSV2/>
          </Route>
          <Route path ="/NBSV3">
            <NBSV3/>
          </Route>
          <Route path="/">
            <Inicio/>
          </Route>
        </Switch>
      </main>
      
    </Router>
  );
}
