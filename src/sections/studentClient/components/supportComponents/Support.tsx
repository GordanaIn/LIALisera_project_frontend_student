import { ThemeProvider } from "@material-ui/core";
import React, {FC} from "react";
import theme from "../../../../Theme";
import {Paper} from "@mui/material";
import {useStyles} from "../../styles/LandingStyles";


const Support: FC<{}> = () =>{
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <Paper className={classes.paper}>
                <h2 className={classes.h2}>Support</h2>
            </Paper>
        </ThemeProvider>
    )
}
export default Support;
