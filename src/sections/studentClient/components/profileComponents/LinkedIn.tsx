import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <Typography className={classes.root}>
            <Link href="#" onClick={preventDefault}>
                LinkedIn
            </Link>
        </Typography>
    );
}
