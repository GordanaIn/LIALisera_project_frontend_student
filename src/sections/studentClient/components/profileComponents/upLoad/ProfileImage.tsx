import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import Avatar from "@material-ui/core/Avatar";
import {useStyles} from "../profileStyles/ProfileStyle";
import {Button, IconButton, Paper} from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import theme from "../../../../../Theme";
import { ThemeProvider } from "@material-ui/core";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export function ProfileImage() {
    const classes = useStyles();
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };


    return (
        <ThemeProvider theme={theme}>
        <div className="ProfileImage">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemove,

                  }) => (

                    <div className={classes.root}>
                        {imageList.map((image, index) => (
                            <div className="image-item__btn-wrapper">
                                <Paper elevation={3} className={classes.photo}>
                                <Avatar style={{height: 100, width: 100}}><img src={image.dataURL} alt="" width="" /></Avatar>
                                </Paper>
                                <IconButton onClick={() => onImageRemove(index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </div>

                            ))}
                        <div className={classes.button7}>
                        <IconButton  color="secondary" component="span"
                            onClick={onImageUpload}
                        >
                            <AddPhotoAlternateIcon/>
                        </IconButton>
                        </div>
                    </div>
                )}

            </ImageUploading>
        </div>
        </ThemeProvider>
    );
}
