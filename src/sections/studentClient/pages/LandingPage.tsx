import React, {FC, Fragment, useEffect, useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../../Theme";
import { ThemeProvider } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import {useStyles} from "../styles/LandingStyles";
import img from "./../components/headerAndFooterComponents/logan/foto/homePage.png";
import Button from "@material-ui/core/Button";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import EditProfile from "../components/registerComponents/EditProfile";
import Profile from "./Profile";
import { Redirect } from "react-router-dom";
const LandingPage:FC<{}> = (props) => {
   const classes = useStyles();


    return (
        <ThemeProvider theme={theme}>
            <div className={classes.titel}>
                <h1 data-testid="title" className={classes.titel}>Welcome to LiaLisera</h1>
                <div className={classes.paper2}>
                <Paper>
                    <h2 className={classes.titel}>Good to have you here!</h2>
                    <h4 className={classes.text}>
                    This is a professional platform made to help students and companies in their search for internships.<br/>
                    With the help of LiaLisera you can create and manage your own profile. <br/> Try it yourself and find your dream internship or job.
                        <br/> If there is any problem, feel free to contact us in support.<br/> Good Luck and have fun!!!
                    </h4>
                        <React.Fragment>
                            <Button href={"/#/profile"} variant="contained" color="secondary" className={classes.btn}>
                                Get Started <DoubleArrowIcon style={{color:"white"}}/>
                            </Button>
                        </React.Fragment>
                </Paper>
                </div>
                <div className={classes.con}>
                <img src={img} alt="" className={classes.img}/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default LandingPage;
