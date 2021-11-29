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
import SearchList from "../components/searchComponents/SearchList";
import VacancyList from "../components/VacancyComponents/VacancyList";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function VacancyGrid(){

    const classes = useStyles();
    const [internships, setInternships] = useState([]);
    const [userId, SetUserId] = useState('7f6a2085-a63a-4a7c-a744-b7d6fd5f3ca1');

    useEffect(() => {
        ApiStudentClient.getAppliedVacancies(userId).then(setInternships).catch(err=>console.log(err));
        console.log(internships)
    },[]);

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

                            </Grid>
                             <h2>Anonser</h2>
                            {
                                internships?.map((internship,index) =>(
                                    <div key={index} className={classes.root}  >
                                        <VacancyList internship={internship} />
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
