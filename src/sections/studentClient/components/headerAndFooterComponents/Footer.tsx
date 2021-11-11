
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {ThemeProvider} from "@mui/material";
import theme from "../../.././../Theme";

import {useStyles} from "../../styles/HeaderStyles";
import FooterPhoto from "./logan/FooterPhoto";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

export function Footer () {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <ThemeProvider theme={theme}>
                <CssBaseline />
                <Paper  style={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                    <BottomNavigation style={{alignItems: "center", height: 80, backgroundColor:"#4C525C"}}
                                      showLabels value={value}
                                      onChange={(event, newValue) => {setValue(newValue);}}
                    >
                        <p style={{alignItems: "center",color:"white"}}>Production LiaLisera</p>
                    </BottomNavigation>
                </Paper>
        </ThemeProvider>
    )
}

