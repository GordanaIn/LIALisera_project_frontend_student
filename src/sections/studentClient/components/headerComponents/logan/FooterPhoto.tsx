import React, {FC} from "react";
import footer from "./foto/footer.png";
import {useStyles} from "../headerStyles/NavbarStyle";

const FooterPhoto: FC<{}> = () =>{
    const classes = useStyles();
    return(
        <div className={classes.div}>
            <img src={footer} alt="" className={classes.logo}/>
        </div>
    )

}
export default FooterPhoto;
