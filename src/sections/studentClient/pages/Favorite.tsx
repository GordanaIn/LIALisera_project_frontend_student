import React, {FC, useEffect, useState} from "react";
import FavoriteList from "../components/favoriteComponents/FavoriteList";
import IAdds from "../interfaces/IAdds";
import SearchListFrontEnd from "../components/searchComponents/SearchListFrontEnd";
import StudentClient from "../Api/StudentClient";
//import FavoritesProvider from "../../contexts/FavoritesContext"

interface Props{

}

const Favorite : FC<{adds:IAdds}> = ({adds}) =>{
    const [list, setList] = useState(adds);


    // this is for when backend is connected
    useEffect(() => {
        StudentClient.getInternships().then(setList).catch(err=>console.log(err));
    },[]);


    return(
        <div>
            {
                <div className="row">
                  {/*  {list.map(adds => (
                                <SearchListFrontEnd key={adds.id} {...adds} />
                    )}*/}
                </div>
            }
        <FavoriteList/>
        </div>
    )

}
export default Favorite;
