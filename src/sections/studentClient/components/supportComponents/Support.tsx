import {Paper, TextField, ThemeProvider} from "@material-ui/core";
import React, {FC} from "react";
import theme from "../../../../Theme";
import {useStyles} from "../../styles/LandingStyles";

const Support: FC<{}> = () =>{
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <Paper className={classes.paper}>
                <h2 className={classes.h2}>Support</h2>
                <TextField id="outlined-search" label="Name" type="search" />
                <TextField
                    id="outlined-helperText"
                    label="Email"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Note"
                    multiline
                    rows={4}
                />
            </Paper>
        </ThemeProvider>
    )
}
export default Support;
