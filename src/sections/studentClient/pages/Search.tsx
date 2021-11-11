//import React, {FC, useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchGrid from "../components/searchComponents/SearchGrid";
import theme from "../../../Theme";
import { ThemeProvider } from '@material-ui/core';
import {useStyles} from "../styles/SearchStyles";
import ApiStudentClient from "../Api/ApiStudentClient";
/*


export default function Search(){
    const [internships, setInternships] = useState([]);
    useEffect(() => {
        ApiStudentClient.getInternships().then(setInternships).catch(err=>console.log(err));
        console.log(internships)
    },[]);

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            {
                internships?.map(internship =>(
                 <div className={classes.root}  >
                   <SearchGrid internship={internship} />
                 </div>
                ))
            }

             {

                                internships?.map(internship =>(
                                    <div className={classes.root}  >
                                        <SearchListFrontEnd internship={internship} />
                                    </div>
                                ))
                            }
         </ThemeProvider>
    );
}

*/
