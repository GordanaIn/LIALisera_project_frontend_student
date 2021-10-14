import React from 'react';
import Button from '@material-ui/core/Button';
import {useStyles} from "./upLoadStyles/UploadStyle";
import theme from "../../../../../Theme";
import { ThemeProvider } from '@material-ui/core';
import FileUploading, {FileListType} from "react-file-uploading";
import Avatar from "@material-ui/core/Avatar";
import {IconButton} from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";

export default function UploadButtons() {
    const classes = useStyles();
    const [file, setFiles] = React.useState([]);
    const maxNumber = 1;

    const onChange = (
        fileList: FileListType,
        addUpdateIndex: number[] | undefined
    ) => {
        console.log(fileList, addUpdateIndex);
        setFiles(fileList as never[]);
    };


    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <div className="DocFile">
                <FileUploading
                    multiple
                    value={file}
                    onChange={onChange}
                    maxNumber={maxNumber}
                >
                    {({
                          fileList,
                          onFileUpload,
                          onFileRemove,

                      }) => (

                        <div className={classes.root}>
                            {fileList.map((file, index) => (
                                <div className="image-item__btn-wrapper">
                                    <Avatar style={{height: 150, width: 150}}><img src={file.dataURL} alt="" width="" /></Avatar>
                                    <IconButton onClick={() => onFileRemove(index)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>
                            ))}
                            <button
                                onClick={onFileUpload}
                            >
                                Upload File
                            </button>
                        </div>
                    )}
                </FileUploading>
            </div>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="secondary" component="span">
                    CV
                </Button>
            </label>
        </div>
        </ThemeProvider>
    );
}
