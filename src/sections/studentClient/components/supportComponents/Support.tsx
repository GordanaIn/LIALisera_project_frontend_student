import {Paper, TextField, ThemeProvider} from "@material-ui/core";
import React, {FC} from "react";
import theme from "../../../../Theme";
import {useStyles} from "../../styles/LandingStyles";

const Support: FC= () =>{
    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
            <Paper className={classes.paper}>
                <h2 className={classes.h3}>Support</h2>
                <div className={classes.coloumn}>
                    <div className={classes.support}>
                        <TextField style={{backgroundColor:"white", borderRadius:10}} color="secondary"
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                        />
                    </div>
                </div>
            </Paper>
        </ThemeProvider>
    )
}
export default Support;
