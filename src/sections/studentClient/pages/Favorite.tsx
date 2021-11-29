import React, {FC, useEffect, useState} from "react";
import FavoriteList from "../components/favoriteComponents/FavoriteList";
import theme from "../../../Theme";
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";
import ApiStudentClient from "../Api/ApiStudentClient";


const Favorite = () =>{
    const [userId, SetUserId] = useState('1a88834c-ba08-44df-ae50-125c9c2f4562');
    const [internships, setInternships] = useState([]);
    useEffect(() => {
        ApiStudentClient.getFavourite(userId).then(setInternships).catch(err=>console.log(err));
    },[]);

    return(
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline/>
                 <div>
                   {
                    <div className="row">
                     </div>
                   }
                 <FavoriteList />
             </div>
            </React.Fragment>
        </ThemeProvider>
    )

}
export default Favorite;
