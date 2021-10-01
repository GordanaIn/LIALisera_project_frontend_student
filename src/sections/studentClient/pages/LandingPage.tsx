import React, {FC, useEffect, useState} from "react";
import {Paper} from "@material-ui/core";

const LandingPage:FC<{}> = () => {
    return (
    <div style={{
        backgroundImage: `url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        color: 'white'}}>
        <h1 style={{alignItems:'center', textAlign:'center'}}>Welcome to LiaLisera</h1>
        <Paper style={{
            background: 'transparent',
            color: 'white',
            paddingBottom: '5%',
            paddingLeft: '5%',
            paddingRight: '5%',
            textAlign: 'center'
        }}>
            This is a professional platform made to help students and companies in their search for internships.<br/>
            With the help of LiaLisera you can create and manage your own profile.
        </Paper>
    </div>
    )

}

export default LandingPage;