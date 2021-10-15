import React, {FC, useEffect, useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BackgroundImage from "../components/landingPageComponents/BackgroundImage";
import theme from "../../../Theme";
import { ThemeProvider } from "@material-ui/core";
//import {useStyles} from "../components/LandingPageComponents/landningStyles/LandingStyles";

const LandingPage:FC<{}> = () => {
  //  const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline/>
            < BackgroundImage/>
        </React.Fragment>
        </ThemeProvider>
    );
}

export default LandingPage;
