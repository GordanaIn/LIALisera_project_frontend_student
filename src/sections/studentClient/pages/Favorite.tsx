import React, {FC} from "react";
import FavoriteList from "../components/favoriteComponents/FavoriteList";

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
