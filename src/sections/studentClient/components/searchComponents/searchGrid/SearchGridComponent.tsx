import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {SearchFieldComponent} from "../searchField/SearchFieldComponent";
import ListComponent from "../lista/ListComponent";

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

export default function SearchGridComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item xs={6}>
                    <SearchFieldComponent onSubmit={() => {}}/>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <ListComponent/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
