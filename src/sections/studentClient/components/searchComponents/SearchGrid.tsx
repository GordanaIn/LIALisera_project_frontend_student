import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchField from "./SearchField";
import SearchList from "./SearchList";
import Adds from "../../mock-data/addsList";
import searchFunction from "../../utils/searchFunction";
import IAdds from "../../interfaces/IAdds";

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

    /* fetch the list in backoffice - which will be filtered against the searchString
    * it will be a list belonging to arbetsgivar-backoffice, therefore mockedData atm
    * */

    const [query, setQuery] = useState<string>("");

    const searchListResults = Adds.filter((adds) =>
    searchFunction<IAdds>(adds, ["title", "description"], query));


    return (
        <div className={classes.root}>
            <Grid container spacing={3}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item xs={6}>
                    <SearchField onChangeSearchQuery={(query) => setQuery(query)}/>
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <h2>Anonser</h2>
                        {searchListResults.length > 0 && (
                            <div className="row">
                                {searchListResults.map((adds) => (
                                    <SearchList key={adds.id} {...adds} />
                                ))}
                            </div>
                        )}
                        {searchListResults.length === 0 && <p>Hittade inga anonser som matchade din sökning</p>}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
