import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./sections/studentClient/components/headerAndFooterComponents/NavBar";
import Favorite from "./sections/studentClient/pages/Favorite";
import RegisterForm from "./sections/studentClient/components/registerComponents/RegisterForm";
import LandingPage from "./sections/studentClient/pages/LandingPage";
import ChangePassword from "./sections/studentClient/pages/ChangePassword";
import {Footer} from './sections/studentClient/components/headerAndFooterComponents/Footer';
import theme from "./Theme";
import {ThemeProvider} from '@material-ui/core';

import EditProfile from "./sections/studentClient/components/registerComponents/EditProfile";
import Profile from "./sections/studentClient/pages/Profile";
//import Search from "./sections/studentClient/pages/Search";
import SearchGrid from "./sections/studentClient/components/searchComponents/SearchGrid";
import Support from "./sections/studentClient/pages/Support";

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/home" component={LandingPage}/>
                    <Route exact path="/search" component={SearchGrid}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/favorite" component={Favorite}/>
                    <Route exact path="/register" component={RegisterForm}/>
                    <Route exact path="/editProfile" component={EditProfile}/>
                    <Route exact path="/password" component={ChangePassword}/>
                    <Route exact path="/support" component={Support}/>

                </Switch>
                <Footer/>
            </Router>
        </ThemeProvider>
    );
}

export default App;
