import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from "./upLoadStyles/UploadStyle";

export default function UploadButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    CV
                </Button>
            </label>
        </div>
    );
}
