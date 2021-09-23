import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {SearchField} from "./SearchField";
import SearchList from "./SearchList";
import Adds from "../../mock-data/Adds";
import searchFunction from "../../utils/searchFunction";

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
    const query = 'seacrhString';

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
                        {Adds.filter((advert) => searchFunction(advert, ["title", "description", "created", "updated"], query))
                            .map(advert => {
                            return (
                                <h2>{advert.title}</h2>)
                        })}
                        <SearchList/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
