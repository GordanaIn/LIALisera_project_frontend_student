import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import Avatar from "@material-ui/core/Avatar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(5),
            },
        },
        input: {
            display: 'none',
        },
        // avatar: {
        //
        // }

    }),
);

export function ProfileImage() {
    const classes = useStyles();
    const [images, setImages] = React.useState([]);
    const maxNumber = 70;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };

    return (
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
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,

                  }) => (

                    <div className={classes.root}>
                        <Avatar>PI</Avatar>
                        <button
                            onClick={onImageUpload}
                        >
                            Upload image
                        </button>
                        &nbsp;
                        <button onClick={onImageRemoveAll} color="red">Remove all images</button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.dataURL} alt="" width="" />
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)} >Update</button>
                                    <button onClick={() => onImageRemove(index)} >Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
