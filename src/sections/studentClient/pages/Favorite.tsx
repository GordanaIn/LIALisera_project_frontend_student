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

const Favorite : FC<{inernship:Internship}> = ({inernship}) =>{
    const [list, setList] = useState(inernship);


    // this is for when backend is connected
    useEffect(() => {
        StudentClient.getInternships().then(setList).catch(err=>console.log(err));
    },[]);



    return(
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline/>
                 <div>
                   {
                    <div className="row">
                     {/*  {list.map(adds => (
                                <SearchListFrontEnd key={adds.id} {...adds} />
                     )}*/}
                     </div>
                   }
                 <FavoriteList  />
             </div>
            </React.Fragment>
        </ThemeProvider>
    )

}
export default Favorite;
