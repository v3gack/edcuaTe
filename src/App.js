import React from 'react';
import './App.css';
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import {useHistory} from "react-router-dom";
import Home from './components/Home';
import Leccion1 from './components/Leccion1S';


    function App() {
      let history = useHistory();
      return (
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/Tab1" component = {Tab1} />
            <Route exact path = "/Tab2" component = {Tab2} />
            <Route exact path = "/Leccion1" component = {Leccion1} />
          </Switch>
        </Router>
      );
    }

export default App;