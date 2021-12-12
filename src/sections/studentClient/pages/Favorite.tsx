import React, {useEffect, useState} from "react";
import FavoriteList from "../components/favoriteComponents/FavoriteList";
import theme from "../../../Theme";
import {Paper, ThemeProvider} from "@mui/material";
import ApiStudentClient from "../Api/ApiStudentClient";
import Grid from '@material-ui/core/Grid';
import {useStyles} from "../styles/SearchStyles";


const Favorite = () =>{

    const classes = useStyles();

    const [userId, SetUserId] = useState('935eb20c-fb91-4984-8341-a422c1f3c7aa');
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
