import React from 'react';
import './App.css';
import Tab1 from "./components/Tab1";

import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import {useHistory} from "react-router-dom";
import Home from './components/Home';
import Leccion1S from './components/Leccion1S';
import Leccion2S from './components/Leccion2S';
import Leccion3S from './components/Leccion3S';
import Leccion4S from './components/Leccion4S';
import Leccion1R from './components/Leccion1R';
import Leccion2R from './components/Leccion2R';
import Leccion3R from './components/Leccion3R';
import Leccion4R from './components/Leccion4R';
import Leccion1M from './components/Leccion1M';
import Leccion2M from './components/Leccion2M';
import Leccion3M from './components/Leccion3M';
import Leccion4M from './components/Leccion4M';
import Leccion1D from './components/Leccion1D';
import Leccion2D from './components/Leccion2D';
import Leccion3D from './components/Leccion3D';
import Leccion4D from './components/Leccion4D';

import Leccion1sv1 from './components/Leccion1sv1';
import Leccion1sv2 from './components/Leccion1sv2';
import Leccion1sv3 from './components/Leccion1sv3';
import Leccion2sv1 from "./components/Leccion2sv1";
import Leccion2sv2 from "./components/Leccion2sv2";
import Leccion2sv3 from "./components/Leccion2sv3";
import Leccion3sv1 from "./components/Leccion3sv1";
import Leccion3sv2 from "./components/Leccion3sv2";
import Leccion3sv3 from "./components/Leccion3sv3";
import Leccion4sv1 from "./components/Leccion4sv1";
import Leccion4sv2 from "./components/Leccion4sv2";
import Leccion4sv3 from "./components/Leccion4sv3";

import Leccion1rv1 from "./components/Leccion1rv1";
import Leccion1rv2 from "./components/Leccion1rv2";
import Leccion1rv3 from "./components/Leccion1rv3";
import Leccion2rv1 from "./components/Leccion2rv1";
import Leccion2rv2 from "./components/Leccion2rv2";
import Leccion2rv3 from "./components/Leccion2rv3";
import Leccion3rv1 from "./components/Leccion3rv1";
import Leccion3rv2 from "./components/Leccion3rv2";
import Leccion3rv3 from "./components/Leccion3rv3";
import Leccion4rv1 from "./components/Leccion4rv1";
import Leccion4rv2 from "./components/Leccion4rv2";
import Leccion4rv3 from "./components/Leccion4rv3";

import Leccion1mv1 from "./components/Leccion1mv1";
import Leccion1mv2 from "./components/Leccion1mv2";
import Leccion1mv3 from "./components/Leccion1mv3";
import Leccion2mv1 from "./components/Leccion2mv1";
import Leccion2mv2 from "./components/Leccion2mv2";
import Leccion2mv3 from "./components/Leccion2mv3";
import Leccion3mv1 from "./components/Leccion3mv1";
import Leccion3mv2 from "./components/Leccion3mv2";
import Leccion3mv3 from "./components/Leccion3mv3";
import Leccion4mv1 from "./components/Leccion4mv1";
import Leccion4mv2 from "./components/Leccion4mv2";
import Leccion4mv3 from "./components/Leccion4mv3";

import Leccion1dv1 from "./components/Leccion1dv1";
import Leccion1dv2 from "./components/Leccion1dv2";
import Leccion1dv3 from "./components/Leccion1dv3";
import Leccion2dv1 from "./components/Leccion2dv1";
import Leccion2dv2 from "./components/Leccion2dv2";
import Leccion2dv3 from "./components/Leccion2dv3";
import Leccion3dv1 from "./components/Leccion3dv1";
import Leccion3dv2 from "./components/Leccion3dv2";
import Leccion3dv3 from "./components/Leccion3dv3";
import Leccion4dv1 from "./components/Leccion4dv1";
import Leccion4dv2 from "./components/Leccion4dv2";
import Leccion4dv3 from "./components/Leccion4dv3";

import JuegoSumaL1 from "./components/JuegoSumaL1"

    function App() {
      let history = useHistory();
      return (
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/Tab1" component = {Tab1} />
            <Route exact path = "/Leccion1S" component = {Leccion1S} />
            <Route exact path = "/Leccion2S" component = {Leccion2S} />
            <Route exact path = "/Leccion3S" component = {Leccion3S} />
            <Route exact path = "/Leccion4S" component = {Leccion4S} />
            <Route exact path = "/Leccion1R" component = {Leccion1R} />
            <Route exact path = "/Leccion2R" component = {Leccion2R} />
            <Route exact path = "/Leccion3R" component = {Leccion3R} />
            <Route exact path = "/Leccion4R" component = {Leccion4R} />
            <Route exact path = "/Leccion1M" component = {Leccion1M} />
            <Route exact path = "/Leccion2M" component = {Leccion2M} />
            <Route exact path = "/Leccion3M" component = {Leccion3M} />
            <Route exact path = "/Leccion4M" component = {Leccion4M} />
            <Route exact path = "/Leccion1D" component = {Leccion1D} />
            <Route exact path = "/Leccion2D" component = {Leccion2D} />
            <Route exact path = "/Leccion3D" component = {Leccion3D} />
            <Route exact path = "/Leccion4D" component = {Leccion4D} />
            
            <Route exact path = "/Leccion1sv1" component = {Leccion1sv1} />
            <Route exact path = "/Leccion1sv2" component = {Leccion1sv2} />
            <Route exact path = "/Leccion1sv3" component = {Leccion1sv3} />
            <Route exact path = "/Leccion2sv1" component = {Leccion2sv1} />
            <Route exact path = "/Leccion2sv2" component = {Leccion2sv2} />
            <Route exact path = "/Leccion2sv3" component = {Leccion2sv3} />
            <Route exact path = "/Leccion3sv1" component = {Leccion3sv1} />
            <Route exact path = "/Leccion3sv2" component = {Leccion3sv2} />
            <Route exact path = "/Leccion3sv3" component = {Leccion3sv3} />
            <Route exact path = "/Leccion4sv1" component = {Leccion4sv1} />
            <Route exact path = "/Leccion4sv2" component = {Leccion4sv2} />
            <Route exact path = "/Leccion4sv3" component = {Leccion4sv3} />

            <Route exact path = "/Leccion1rv1" component = {Leccion1rv1} />
            <Route exact path = "/Leccion1rv2" component = {Leccion1rv2} />
            <Route exact path = "/Leccion1rv3" component = {Leccion1rv3} />
            <Route exact path = "/Leccion2rv1" component = {Leccion2rv1} />
            <Route exact path = "/Leccion2rv2" component = {Leccion2rv2} />
            <Route exact path = "/Leccion2rv3" component = {Leccion2rv3} />
            <Route exact path = "/Leccion3rv1" component = {Leccion3rv1} />
            <Route exact path = "/Leccion3rv2" component = {Leccion3rv2} />
            <Route exact path = "/Leccion3rv3" component = {Leccion3rv3} />
            <Route exact path = "/Leccion4rv1" component = {Leccion4rv1} />
            <Route exact path = "/Leccion4rv2" component = {Leccion4rv2} />
            <Route exact path = "/Leccion4rv3" component = {Leccion4rv3} />

            <Route exact path = "/Leccion1mv1" component = {Leccion1mv1} />
            <Route exact path = "/Leccion1mv2" component = {Leccion1mv2} />
            <Route exact path = "/Leccion1mv3" component = {Leccion1mv3} />
            <Route exact path = "/Leccion2mv1" component = {Leccion2mv1} />
            <Route exact path = "/Leccion2mv2" component = {Leccion2mv2} />
            <Route exact path = "/Leccion2mv3" component = {Leccion2mv3} />
            <Route exact path = "/Leccion3mv1" component = {Leccion3mv1} />
            <Route exact path = "/Leccion3mv2" component = {Leccion3mv2} />
            <Route exact path = "/Leccion3mv3" component = {Leccion3mv3} />
            <Route exact path = "/Leccion4mv1" component = {Leccion4mv1} />
            <Route exact path = "/Leccion4mv2" component = {Leccion4mv2} />
            <Route exact path = "/Leccion4mv3" component = {Leccion4mv3} />

            <Route exact path = "/Leccion1dv1" component = {Leccion1dv1} />
            <Route exact path = "/Leccion1dv2" component = {Leccion1dv2} />
            <Route exact path = "/Leccion1dv3" component = {Leccion1dv3} />
            <Route exact path = "/Leccion2dv1" component = {Leccion2dv1} />
            <Route exact path = "/Leccion2dv2" component = {Leccion2dv2} />
            <Route exact path = "/Leccion2dv3" component = {Leccion2dv3} />
            <Route exact path = "/Leccion3dv1" component = {Leccion3dv1} />
            <Route exact path = "/Leccion3dv2" component = {Leccion3dv2} />
            <Route exact path = "/Leccion3dv3" component = {Leccion3dv3} />
            <Route exact path = "/Leccion4dv1" component = {Leccion4dv1} />
            <Route exact path = "/Leccion4dv2" component = {Leccion4dv2} />
            <Route exact path = "/Leccion4dv3" component = {Leccion4dv3} />

            <Route exact path = "/JuegoSumaL1" component = {JuegoSumaL1}/>
          </Switch>
        </Router>
      );
    }
// adios mundo
export default App;