import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from "./sections/studentClient/components/headerComponents/NavBar";
import Favorite from "./sections/studentClient/pages/Favorite";
import Profile from "./sections/studentClient/pages/Profile";
import Search from "./sections/studentClient/pages/Search";
import RegisterForm from "./sections/studentClient/components/registerComponents/RegisterForm";
import LandingPage from "./sections/studentClient/pages/LandingPage";

function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/favorite" component={Favorite}/>
          <Route exact path="/register" component={RegisterForm}/>
        </Switch>
      </Router>
  );
}

export default App;
