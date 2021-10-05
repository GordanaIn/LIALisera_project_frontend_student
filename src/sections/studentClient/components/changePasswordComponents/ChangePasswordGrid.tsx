import React, {useEffect, useState} from 'react';
import {makeStyles, styled} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useStyles} from "./ChangePasswordStyling";
import Box from '@material-ui/core/Box';
import ChangePasswordInputFields from "./ChangePasswordInputFields";

export default function ChangePasswordGrid() {

    const classes = useStyles();

    return (
        <Grid container spacing={4} className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <ChangePasswordInputFields/>
            </Paper>
        </Grid>
    );
}
export {}
