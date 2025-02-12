import React, {useEffect, useState} from 'react';
import { styled} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SearchField from "../components/searchComponents/SearchField";
import searchFunction from "../utils/searchFunction";
import {sorterFunction} from "../utils/sorterFunction";
import ISorter from "../interfaces/ISorter";

import theme from "../../../Theme";
import {ThemeProvider} from "@mui/material";
import {useStyles} from "../styles/SearchStyles";
import ApiStudentClient from "../Api/ApiStudentClient";
import {InternshipVacancy, IStudent} from "../interfaces/HandleInterface";
import SearchList from "./SearchList";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function SearchGrid(){

    const classes = useStyles();

    const [query, setQuery] = useState<string>("");
    const [internships, setInternships] = useState([]);
    const [activeSorter, setActiveSorter] = useState<ISorter<InternshipVacancy>>({
        property: "title",
        isDescending: true,
    });


    useEffect(() => {
        ApiStudentClient.getInternships().then(setInternships).catch(err=>console.log(err));
        console.log(internships)
    },[]);

    const searchListResults = internships
        .filter((adds) =>
            searchFunction<InternshipVacancy>(adds, ["title", "description"], query)
        )
        .sort((a, b) =>
            sorterFunction<InternshipVacancy>(a, b, activeSorter)
        );

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Grid container spacing={3}
                     justifyContent="center"
                      direction ="column"
                      alignItems="center">
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

                                    </Grid>
                                </Box>
                            </Grid>
                             <h2>Anonser</h2>
                            {
                                internships?.map((internship,index) =>(
                                    <div key={index} className={classes.root}  >
                                        <SearchList internship={internship} />
                                    </div>

                                ))
                            }
                            { internships.length === 0 && <p>Hittade inga anonser som matchade din sökning</p>}

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}
