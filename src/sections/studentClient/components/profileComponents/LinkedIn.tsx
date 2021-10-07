import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > * + *': {
                margin: theme.spacing(5),
            },
        },
    }),
);

export default function Links() {
    const classes = useStyles();

    return (
        <Typography className={classes.root}>
            <Link to="https://www.linkedin.com/" onClick={() => window.open('https://www.linkedin.com/', '_blank')}>
                LinkedIn
            </Link>
        </Typography>
    );
}
