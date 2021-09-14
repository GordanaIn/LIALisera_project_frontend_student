// @ts-ignore
import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > *': {
                margin: theme.spacing(8),
            },
        },
    }),
);

const UpdateProfile = () => {
    return(
        <div>

        </div>
    )
}
export default UpdateProfile;
