import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./sections/studentClient/components/headerComponents/NavBar";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Favorite from "./sections/studentClient/pages/Favorite";
import Profile from "./sections/studentClient/pages/Profile";
import MinaSidor from "./sections/studentClient/pages/MinaSidor";


function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/MinaSidor" component={MinaSidor}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/Favorite" component={Favorite}/>
        </Switch>
      </Router>
  );
}

export default App;
