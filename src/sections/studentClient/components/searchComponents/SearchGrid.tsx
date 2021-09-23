import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {SearchField} from "./SearchField";
import SearchList from "./SearchList";
import adds from "/mock-data/adds.ts";
import {waitForElementToBeRemoved} from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
        flexDirection: 'column',
        alignItems: "center",
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: "center",
    },
}));

export default function SearchGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item xs={6}>
                    <SearchField onSubmit={({searchString}) => {
                        console.log(searchString, "hej")
                    }}/>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        {adds.map(=>{
                            return (<h2>{adds.}</h2>)
                        })}
                        <SearchList/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
