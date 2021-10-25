import React from 'react';
import './App.css';
import Tab1 from "./components/Tab1";
import videosuma1 from "./components/videosuma1";
import videosuma2 from "./components/videosuma2";
import videosuma3 from "./components/videosuma31";
import videosuma21 from "./components/videosuma21";
import videosuma22 from "./components/videosuma22";
import videosuma23 from "./components/videosuma23";
import videosuma31 from "./components/videosuma31";
import videosuma32 from "./components/videosuma32";
import videosuma33 from "./components/videosuma33";
import videosuma41 from "./components/videosuma41";
import videosuma42 from "./components/videosuma42";
import videosuma43 from "./components/videosuma43";

import videoresta1 from "./components/videoresta1";
import videoresta2 from "./components/videoresta2";
import videoresta3 from "./components/videoresta3";
import videoresta21 from "./components/videoresta21";
import videoresta22 from "./components/videoresta22";
import videoresta23 from "./components/videoresta23";
import videoresta31 from "./components/videoresta31";
import videoresta32 from "./components/videoresta32";
import videoresta33 from "./components/videoresta33";
import videoresta41 from "./components/videoresta41";
import videoresta42 from "./components/videoresta42";
import videoresta43 from "./components/videoresta43";

import videomul1 from "./components/videomul1";
import videomul2 from "./components/videomul2";
import videomul3 from "./components/videomul3";
import videomul21 from "./components/videomul21";
import videomul22 from "./components/videomul22";
import videomul23 from "./components/videomul23";
import videomul31 from "./components/videomul31";
import videomul32 from "./components/videomul32";
import videomul33 from "./components/videomul33";
import videomul41 from "./components/videomul41";
import videomul42 from "./components/videomul42";
import videomul43 from "./components/videomul43";

import videodiv1 from "./components/videodiv1";
import videodiv2 from "./components/videodiv2";
import videodiv3 from "./components/videodiv3";
import videodiv21 from "./components/videodiv21";
import videodiv22 from "./components/videodiv22";
import videodiv23 from "./components/videodiv23";
import videodiv31 from "./components/videodiv31";
import videodiv32 from "./components/videodiv32";
import videodiv33 from "./components/videodiv33";
import videodiv41 from "./components/videodiv41";
import videodiv42 from "./components/videodiv42";
import videodiv43 from "./components/videodiv43";

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
<<<<<<< Updated upstream
import Leccion1sv1 from './components/Leccion1sv1';
import Leccion1sv2 from './components/Leccion1sv2';
import Leccion1sv3 from './components/Leccion1sv3';
=======



>>>>>>> Stashed changes

    function App() {
      let history = useHistory();
      return (
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/Tab1" component = {Tab1} />
<<<<<<< Updated upstream
            <Route exact path = "/Tab2" component = {Tab2} />
            <Route exact path = "/Leccion1S" component = {Leccion1S} />
            <Route exact path = "/Leccion2S" component = {Leccion2S} />
            <Route exact path = "/Leccion3S" component = {Leccion3S} />
            <Route exact path = "/Leccion4S" component = {Leccion4S} />
=======
            <Route exact path = "/videosuma1" component = {videosuma1} />
            <Route exact path = "/videosuma2" component = {videosuma2} />
            <Route exact path = "/videosuma3" component = {videosuma3} />
            <Route exact path = "/videosuma21" component = {videosuma21} />
            <Route exact path = "/videosuma22" component = {videosuma22} />
            <Route exact path = "/videosuma23" component = {videosuma23} />
            <Route exact path = "/videosuma31" component = {videosuma31} />
            <Route exact path = "/videosuma32" component = {videosuma32} />
            <Route exact path = "/videosuma33" component = {videosuma33} />
            <Route exact path = "/videosuma41" component = {videosuma41} />
            <Route exact path = "/videosuma42" component = {videosuma42} />
            <Route exact path = "/videosuma43" component = {videosuma43} />

            <Route exact path = "/videoresta1" component = {videoresta1} />
            <Route exact path = "/videoresta2" component = {videoresta2} />
            <Route exact path = "/videoresta3" component = {videoresta3} />
            <Route exact path = "/videoresta21" component = {videoresta21} />
            <Route exact path = "/videoresta22" component = {videoresta22} />
            <Route exact path = "/videoresta23" component = {videoresta23} />
            <Route exact path = "/videoresta31" component = {videoresta31} />
            <Route exact path = "/videoresta32" component = {videoresta32} />
            <Route exact path = "/videoresta33" component = {videoresta33} />
            <Route exact path = "/videoresta41" component = {videoresta41} />
            <Route exact path = "/videoresta42" component = {videoresta42} />
            <Route exact path = "/videoresta43" component = {videoresta43} />

            <Route exact path = "/videomul1" component = {videomul1} />
            <Route exact path = "/videomul2" component = {videomul2} />
            <Route exact path = "/videomul3" component = {videomul3} />
            <Route exact path = "/videomul21" component = {videomul21} />
            <Route exact path = "/videomul22" component = {videomul22} />
            <Route exact path = "/videomul23" component = {videomul23} />
            <Route exact path = "/videomul31" component = {videomul31} />
            <Route exact path = "/videomul32" component = {videomul32} />
            <Route exact path = "/videomul33" component = {videomul33} />
            <Route exact path = "/videomul41" component = {videomul41} />
            <Route exact path = "/videomul42" component = {videomul42} />
            <Route exact path = "/videomul43" component = {videomul43} />

            <Route exact path = "/videodiv1" component = {videodiv1} />
            <Route exact path = "/videodiv2" component = {videodiv2} />
            <Route exact path = "/videodiv3" component = {videodiv3} />
            <Route exact path = "/videodiv21" component = {videodiv21} />
            <Route exact path = "/videodiv22" component = {videodiv22} />
            <Route exact path = "/videodiv23" component = {videodiv23} />
            <Route exact path = "/videodiv31" component = {videodiv31} />
            <Route exact path = "/videodiv32" component = {videodiv32} />
            <Route exact path = "/videodiv33" component = {videodiv33} />
            <Route exact path = "/videodiv41" component = {videodiv41} />
            <Route exact path = "/videodiv42" component = {videodiv42} />
            <Route exact path = "/videodiv43" component = {videodiv43} />
            
            
 
            

            <Route exact path = "/Leccion1" component = {Leccion1S} />
            <Route exact path = "/Leccion2" component = {Leccion2S} />
            <Route exact path = "/Leccion3" component = {Leccion3S} />
            <Route exact path = "/Leccion4" component = {Leccion4S} />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <Route exact path = "/Leccion1sv1" component = {Leccion1sv1} />
            <Route exact path = "/Leccion1sv2" component = {Leccion1sv2} />
            <Route exact path = "/Leccion1sv3" component = {Leccion1sv3} />
=======

>>>>>>> Stashed changes
          </Switch>
        </Router>
      );
    }

export default App;