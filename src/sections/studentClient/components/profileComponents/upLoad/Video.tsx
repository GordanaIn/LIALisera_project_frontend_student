import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {useStyles} from "./upLoadStyles/UploadStyle";
import theme from "../../../../../Theme";
import { ThemeProvider } from '@material-ui/core';

export default function UploadButtons() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
                <IconButton color="secondary" aria-label="upload picture" component="span">
                    <PhotoCamera />
                </IconButton>
            </label>
        </div>
        </ThemeProvider>
    );
}
