import React, {useEffect, useState} from 'react';
import {styled} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import theme from "../../../Theme";
import {ThemeProvider} from "@mui/material";
import {useStyles} from "../styles/SearchStyles";
import ApiStudentClient from "../Api/ApiStudentClient";
import VacancyList from "./VacancyList";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function VacancyGrid(){

    const classes = useStyles();
    const [internships, setInternships] = useState([]);
    const [userId, SetUserId] = useState('4e7c93d6-0240-49c1-89dc-f5e9445bfbb8');

    useEffect(() => {
        ApiStudentClient.getAppliedVacancies(userId).then(setInternships).catch(err=>console.log(err));
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
