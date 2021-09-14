import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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

 function FallbackAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar src="/broken-image.jpg"/>
        </div>
    );
}
export default FallbackAvatars;
