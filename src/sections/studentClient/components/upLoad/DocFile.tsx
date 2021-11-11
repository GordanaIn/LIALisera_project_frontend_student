import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from "../../../../Theme";
import {useStyles} from '../../styles/UploadStyle';
import apiUrl from "../../Api/apiUrl";
//import axios from "axios";

export default function DocFile() {
    const classes = useStyles();

   /* const apiCall = async () => {
        let response = await axios.get(
            `${apiUrl}/api/uploadFile/`,
            {
                headers: {
                    Authorization: "uploadFile",
                },
            }
        );
        return response.data;
    };*/
  //  apiCall().then((result) => props.uploadFile(result));



    return (

        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                 //   result={uploadFile}
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
