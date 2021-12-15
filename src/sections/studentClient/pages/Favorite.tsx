import React, {useEffect, useState} from "react";
import FavoriteList from "./FavoriteList";
import theme from "../../../Theme";
import {Paper, ThemeProvider} from "@mui/material";
import ApiStudentClient from "../Api/ApiStudentClient";
import Grid from '@material-ui/core/Grid';
import {useStyles} from "../styles/SearchStyles";


const Favorite = () =>{

    const classes = useStyles();

    const [userId, SetUserId] = useState('4e7c93d6-0240-49c1-89dc-f5e9445bfbb8');
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        ApiStudentClient.getFavourite(userId).then(setInternships).catch(err=>console.log(err));
    },[]);

    return(
        <ThemeProvider theme={theme} >
            <div className={classes.root}>
                <Grid container spacing={3}
                      justifyContent="center"
                      direction ="column"
                      alignItems="center">
                    <Grid item xs={10}>
                    <Paper className={classes.paper}>
                    <Grid item xs={6}>  </Grid>
                     {
                         internships?.map((internship,index) =>(
                             <div key={index} className={classes.root}  >
                                 <FavoriteList internship={internship} />
                             </div>

                         ))
                     }
                    </Paper>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );

}
export default Favorite;
