import React from 'react';
import { makeStyles, createStyles,ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import theme from "../../../../Theme";
import {Theme} from "@mui/material/styles";

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
        <ThemeProvider theme={theme}>
        <Typography className={classes.root}>
            <Link to="https://www.linkedin.com/" onClick={() => window.open('https://www.linkedin.com/', '_blank')}>
                LinkedIn
            </Link>
        </Typography>
        </ThemeProvider>
    );
}
