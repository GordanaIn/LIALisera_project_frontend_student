import React, {FC, useEffect, useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BackgroundImage from "../components/landingPageComponents/BackgroundImage";

const LandingPage:FC<{}> = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            < BackgroundImage/>
        </React.Fragment>
    );
}

export default LandingPage;