import { Container } from "@material-ui/core";
import React from "react";
import {Route, Switch} from "react-router-dom";
import Favorite from "../favoriteComponents/Favorite";
import Search from "../searchComponents/Search";
import Support from "../supportComponents/Support";
import Profile from "../profileComponents/Profile";
import UpdateProfile from "../profileComponents/updateProfile/UpdateProfile";


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
