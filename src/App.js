import React from 'react';
import './App.css';
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
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

    function App() {
      let history = useHistory();
      return (
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/Tab1" component = {Tab1} />
            <Route exact path = "/Tab2" component = {Tab2} />
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
          </Switch>
        </Router>
      );
    }

export default App;