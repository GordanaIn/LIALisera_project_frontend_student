import React, {FC} from "react";
import FavoriteList from "../components/favoriteComponents/FavoriteList";
//import FavoritesProvider from "../../contexts/FavoritesContext"

interface Props{

}

const Favorite : FC<Props> = () =>{
    return(
        <div>
        <FavoriteList/>
        </div>
    )

}
export default Favorite;
