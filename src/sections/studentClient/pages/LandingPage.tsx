import React, {FC, useEffect, useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BackgroundImage from "../components/landingPageComponents/BackgroundImage";
//import {useStyles} from "../components/LandingPageComponents/landningStyles/LandingStyles";

const LandingPage:FC<{}> = () => {
  //  const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            < BackgroundImage/>
        </React.Fragment>
    );
}

export default LandingPage;
