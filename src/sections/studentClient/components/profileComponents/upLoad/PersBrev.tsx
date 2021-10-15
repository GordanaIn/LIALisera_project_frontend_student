import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from "./upLoadStyles/UploadStyle";
import theme from "../../../../../Theme";
import { ThemeProvider } from '@material-ui/core';

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
                    Pers-Latter
                </Button>
            </label>
        </div>
        </ThemeProvider>
    );
}
