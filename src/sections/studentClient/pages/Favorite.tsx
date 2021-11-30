import React, {FC, useEffect, useState} from "react";
import FavoriteList from "../components/favoriteComponents/FavoriteList";
import theme from "../../../Theme";
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";
import ApiStudentClient from "../Api/ApiStudentClient";

import {useStyles} from "../styles/SearchStyles";


const Favorite = () =>{

    const classes = useStyles();

    const [userId, SetUserId] = useState('58759e05-9696-48ac-95b1-e9dbb813a389');
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        ApiStudentClient.getFavourite(userId).then(setInternships).catch(err=>console.log(err));
    },[]);



    return(
        <ThemeProvider theme={theme} >
            <React.Fragment>
                <CssBaseline/>
                 <div>
                   {
                    <div className="row">
                     </div>
                   }
                     {
                         internships?.map((internship,index) =>(
                             <div key={index} className={classes.root}  >
                                 <FavoriteList internship={internship} />
                             </div>

                         ))
                     }
             </div>
            </React.Fragment>
        </ThemeProvider>
    )

}
export default Favorite;
