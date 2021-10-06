import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useStyles} from "./ChangePasswordStyling";

import ChangePasswordInputFields from "./ChangePasswordInputFields";
import ChangePasswordButtons from "./ChangePasswordButtons";

export default function ChangePasswordGrid() {

    const classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <ChangePasswordInputFields/>
                <ChangePasswordButtons/>
            </Paper>
        </Grid>
    );
}
