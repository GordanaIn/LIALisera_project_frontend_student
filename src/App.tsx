import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from "./sections/studentClient/components/headerComponents/NavBar";
import Favorite from "./sections/studentClient/pages/Favorite";
import Profile from "./sections/studentClient/pages/Profile";
import Home from "./sections/studentClient/pages/Home";
import Search from "./sections/studentClient/pages/Search";

function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/favorite" component={Favorite}/>
          <Route exact path="/register" component={Register}/>


        </Switch>
      </Router>
  );
}

export default App;
