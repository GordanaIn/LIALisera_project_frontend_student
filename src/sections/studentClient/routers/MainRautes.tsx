import { Container } from "@material-ui/core";
import React from "react";
import {Route, Switch} from "react-router-dom";
import Favorite from "../pages/Favorite";
import Search from "../pages/Search";
import Support from "../pages/Support";
import Profile from "../pages/Profile";
import UpdateProfile from "../components/profileComponents/UpdateProfile";


export default function Navigation(){
    return(
        <Container maxWidth={"xl"}>
            <Switch>
                <Route path="/profile/:profileId">
                    <Profile/>
                </Route>
                <Route path="/updateProfile/:updateProfileId">
                    <UpdateProfile/>
                </Route>
                <Route path="/search/:searchId">
                    <Search/>
                </Route>
                <Route path="/favorite/:favoriteId">
                    <Favorite/>
                </Route>
                <Route path="/support/:supportId">
                    <Support/>
                </Route>
            </Switch>
        </Container>
    )
}
