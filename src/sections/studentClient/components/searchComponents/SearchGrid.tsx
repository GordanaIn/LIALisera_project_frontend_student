import React, {useEffect, useState} from 'react';
import {makeStyles, styled} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SearchField from "./SearchField";
import SearchList from "./SearchList";
import Adds from "../../mock-data/addsList";
import searchFunction from "../../utils/searchFunction";
import {sorterFunction} from "../../utils/sorterFunction";
import IAdds from "../../interfaces/IAdds";
import ISorter from "../../interfaces/ISorter";
import Sorters from "../sharedComponents/Sorter";
import SearchListFrontEnd from "./SearchListFrontEnd";

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

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SearchGrid() {
    const classes = useStyles();


    const [query, setQuery] = useState<string>("");
    const [activeSorter, setActiveSorter] = useState<ISorter<IAdds>>({
        property: "title",
        isDescending: true,
    });

    const searchListResults = Adds
        .filter((adds) =>
            searchFunction<IAdds>(adds, ["title", "description"], query)
        )
        .sort((a, b) =>
            sorterFunction<IAdds>(a, b, activeSorter)
        );

    return (
        <div className={classes.root}>
            <Grid container spacing={3}
                  direction="column"
                  justifyContent="center"
                  alignItems="center"

            >

                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                        <Grid item xs={6}>
                            <Box sx={{flexGrow: 1}} style={{paddingTop: 12}}>
                                <Grid container spacing={3}>
                                    <Grid item xs="auto">
                                        <Item>
                                            <SearchField onChangeSearchQuery={(query) => setQuery(query)}/>
                                        </Item>
                                    </Grid>


                                  {/*
                                   Sorter that looks like crap... but code might be useful
                                   <Grid item xs>
                                        <Item>
                                            <Sorters<IAdds>
                                                object={Adds[0]}
                                                onChangeSorter={(property, isDescending) => {
                                                    setActiveSorter({
                                                        property,
                                                        isDescending,
                                                    });
                                                }}
                                            />
                                        </Item>
                                    </Grid>*/}
                                </Grid>
                            </Box>
                        </Grid>
                        <h2>Anonser</h2>
                        {searchListResults.length > 0 && (
                            <div className="row">
                                {searchListResults.map((adds) => (
                                    <SearchListFrontEnd key={adds.id} {...adds} />
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
