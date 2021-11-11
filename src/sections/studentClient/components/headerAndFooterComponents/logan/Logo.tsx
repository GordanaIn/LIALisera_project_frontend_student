import React, {FC} from "react";
import logan from "./foto/logan.png";
import {useStyles} from "../../../styles/NavbarStyle";

const Logo: FC<{}> = () =>{
    const classes = useStyles();
    return(
        <div className={classes.div}>
            <img src={logan} alt="" className={classes.logo}/>
        </div>
    )

}
export default Logo;
