import React, {FC, useEffect, useState} from "react";
import FavoriteList from "../components/favoriteComponents/FavoriteList";
import IAdds from "../interfaces/IAdds";
import theme from "../../../Theme";
import StudentClient from "../Api/StudentClient";
import {ThemeProvider} from "@mui/material";
import {types} from "util";
import internal from "stream";
import CssBaseline from "@material-ui/core/CssBaseline";
import {get} from "mobx";
import {Internship} from "../interfaces/HandleInterface";

//import FavoritesProvider from "../../contexts/FavoritesContext"

interface Props{

}

const Favorite = () =>{
/*
    const data ={
        favorites: [
            {
                title: "Java",
                description: "Junior Java",
                id: 1,
                created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
                updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
                favourite: false,
            },
            {
                title: "Java",
                description: "Senior Java",
                id: 2,
                created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
                updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
                favourite: false,

            },
            {
                title: "Java",
                description: "Junior Java och MSQL",
                id: 3,
                created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
                updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
                favourite: false,
            },
        ],
    };

*/

    // this is for when backend is connected - not correct code for fetch, it's a placeholder
   /* useEffect(() => {
        StudentClient.getInternships().then(setList).catch(err=>console.log(err));
    },[]);*/



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
