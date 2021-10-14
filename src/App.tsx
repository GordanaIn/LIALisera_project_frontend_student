import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./sections/studentClient/components/headerComponents/NavBar";
import Favorite from "./sections/studentClient/pages/Favorite";
import Profile from "./sections/studentClient/pages/Profile";
import Search from "./sections/studentClient/pages/Search";
import RegisterForm from "./sections/studentClient/components/registerComponents/RegisterForm";
import LandingPage from "./sections/studentClient/pages/LandingPage";
import ChangePassword from "./sections/studentClient/pages/ChangePassword";
import DisplayStudent from "./sections/studentClient/components/registerComponents/DisplayStudent";
import DisplayProfile from "./sections/studentClient/components/registerComponents/DisplayProfile";
import StudentList from "./sections/studentClient/components/registerComponents/StudentList";

function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/home" component={LandingPage}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/favorite" component={Favorite}/>
          <Route exact path="/register" component={RegisterForm}/>
            <Route exact path="/displayProfile" component={DisplayProfile}/>
          <Route exact path="/password" component={ChangePassword}/>
        </Switch>
      </Router>
  );
}

export default App;
