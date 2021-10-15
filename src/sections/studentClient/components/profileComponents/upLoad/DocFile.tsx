import React from 'react';
import {ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from "../../../../../Theme";
import { useStyles } from './upLoadStyles/UploadStyle';

export default function UploadButtons() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="secondary" component="span">
                    Resume
                </Button>
            </label>
        </div>
        </ThemeProvider>
    );
}
