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
import { NPSV1 } from "./videos/NPSV1";
import { NPSV2 } from "./videos/NPSV2";
import { NPSV3 } from "./videos/NPSV3";
import { NASV1 } from "./videos/NASV1";
import { NASV2 } from "./videos/NASV2";
import { NASV3 } from "./videos/NASV3";
import { LecRNB } from "./pages/LecRNB";
import { LecRNP } from "./pages/LecRNP";
import { LecRNA } from "./pages/LecRNA";
import { NSRV1 } from "./videos/NSRV1";
import { NSRV2 } from "./videos/NSRV2";
import { NSRV3 } from "./videos/NSRV3";
import { NBRV1 } from "./videos/NBRV1";
import { NBRV2 } from "./videos/NBRV2";
import { NBRV3 } from "./videos/NBRV3";
import { NPRV1 } from "./videos/NPRV1";
import { NPRV2 } from "./videos/NPRV2";
import { NPRV3 } from "./videos/NPRV3";
import { NARV1 } from "./videos/NARV1";
import { NARV2 } from "./videos/NARV2";
import { NARV3 } from "./videos/NARV3";
import { LecMNB } from "./pages/LecMNB";
import { LecMNP } from "./pages/LecMNP";
import { LecMNA } from "./pages/LecMNA";
import { NSMV1 } from "./videos/NSMV1";
import { NSMV2 } from "./videos/NSMV2";
import { NSMV3 } from "./videos/NSMV3";
import { NBMV1 } from "./videos/NBMV1";
import { NBMV2 } from "./videos/NBMV2";
import { NBMV3 } from "./videos/NBMV3";
import { NPMV1 } from "./videos/NPMV1";
import { NPMV2 } from "./videos/NPMV2";
import { NPMV3 } from "./videos/NPMV3";
import { NAMV1 } from "./videos/NAMV1";
import { NAMV2 } from "./videos/NAMV2";
import { NAMV3 } from "./videos/NAMV3";
import { LecDNB } from "./pages/LecDNB";
import { LecDNP } from "./pages/LecDNP";
import { LecDNA } from "./pages/LecDNA";
import { NSDV1 } from "./videos/NSDV1";
import { NSDV2 } from "./videos/NSDV2";
import { NSDV3 } from "./videos/NSDV3";
import { NBDV1 } from "./videos/NBDV1";
import { NBDV2 } from "./videos/NBDV2";
import { NBDV3 } from "./videos/NBDV3";
import { NPDV1 } from "./videos/NPDV1";
import { NPDV2 } from "./videos/NPDV2";
import { NPDV3 } from "./videos/NPDV3";
import { NADV1 } from "./videos/NADV1";
import { NADV2 } from "./videos/NADV2";
import { NADV3 } from "./videos/NADV3";

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
          <Route path ="/NPSV1">
            <NPSV1/>
          </Route>
          <Route path ="/NPSV2">
            <NPSV2/>
          </Route>
          <Route path ="/NPSV3">
            <NPSV3/>
          </Route>
          <Route path ="/NASV1">
            <NASV1/>
          </Route>
          <Route path ="/NASV2">
            <NASV2/>
          </Route>
          <Route path ="/NASV3">
            <NASV3/>
          </Route>
          <Route path ="/LecRNB">
            <LecRNB/>
          </Route>
          <Route path ="/LecRNP">
            <LecRNP/>
          </Route>
          <Route path ="/LecRNA">
            <LecRNA/>
          </Route>
          <Route path ="/NSRV1">
            <NSRV1/>
          </Route>
          <Route path ="/NSRV2">
            <NSRV2/>
          </Route>
          <Route path ="/NSRV3">
            <NSRV3/>
          </Route>
          <Route path ="/NBRV1">
            <NBRV1/>
          </Route>
          <Route path ="/NBRV2">
            <NBRV2/>
          </Route>
          <Route path ="/NBRV3">
            <NBRV3/>
          </Route>
          <Route path ="/NPRV1">
            <NPRV1/>
          </Route>
          <Route path ="/NPRV2">
            <NPRV2/>
          </Route>
          <Route path ="/NPRV3">
            <NPRV3/>
          </Route>
          <Route path ="/NARV1">
            <NARV1/>
          </Route>
          <Route path ="/NARV2">
            <NARV2/>
          </Route>
          <Route path ="/NARV3">
            <NARV3/>
          </Route>
          <Route path ="/LecMNB">
            <LecMNB/>
          </Route>
          <Route path ="/LecMNP">
            <LecMNP/>
          </Route>
          <Route path ="/LecMNA">
            <LecMNA/>
          </Route>
          <Route path = "/NSMV1">
            <NSMV1/>
          </Route>
          <Route path = "/NSMV2">
            <NSMV2/>
          </Route>
          <Route path = "/NSMV3">
            <NSMV3/>
          </Route>
          <Route path = "/NBMV1">
            <NBMV1/>
          </Route>
          <Route path = "/NBMV2">
            <NBMV2/>
          </Route>
          <Route path = "/NBMV3">
            <NBMV3/>
          </Route>
          <Route path = "/NPMV1">
            <NPMV1/>
          </Route>
          <Route path = "/NPMV2">
            <NPMV2/>
          </Route>
          <Route path = "/NPMV3">
            <NPMV3/>
          </Route>
          <Route path = "/NAMV1">
            <NAMV1/>
          </Route>
          <Route path = "/NAMV2">
            <NAMV2/>
          </Route>
          <Route path = "/NAMV3">
            <NAMV3/>
          </Route>
          <Route path ="/LecDNB">
            <LecDNB/>
          </Route>
          <Route path ="/LecDNP">
            <LecDNP/>
          </Route>
          <Route path ="/LecDNA">
            <LecDNA/>
          </Route>
          <Route path = "/NSDV1">
            <NSDV1/>
          </Route>
          <Route path = "/NSDV2">
            <NSDV2/>
          </Route>
          <Route path = "/NSDV3">
            <NSDV3/>
          </Route>
          <Route path = "/NBDV1">
            <NBDV1/>
          </Route>
          <Route path = "/NBDV2">
            <NBDV2/>
          </Route>
          <Route path = "/NBDV3">
            <NBDV3/>
          </Route>
          <Route path = "/NPDV1">
            <NPDV1/>
          </Route>
          <Route path = "/NPDV2">
            <NPDV2/>
          </Route>
          <Route path = "/NPDV3">
            <NPDV3/>
          </Route>
          <Route path = "/NADV1">
            <NADV1/>
          </Route>
          <Route path = "/NADV2">
            <NADV2/>
          </Route>
          <Route path = "/NADV3">
            <NADV3/>
          </Route>
          <Route path="/">
            <Inicio/>
          </Route>
        </Switch>
      </main>
      
    </Router>
  );
}
