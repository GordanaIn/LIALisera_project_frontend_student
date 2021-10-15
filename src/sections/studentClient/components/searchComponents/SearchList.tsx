import React, {FC, useEffect, useState} from 'react';
import { ThemeProvider} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import List from '@material-ui/core/List';

import StudentClient from "../../Api/StudentClient";
import {Internship} from "../../interfaces/HandleInterface";
import theme from "../../../../Theme";
import {useStyles} from "./styles/SearchStyles";


const SearchList:FC<{internship: Internship}> = ({internship}) => {

    const classes = useStyles();
    const [fav, setFavourite] = useState(false);
    const [secondary, setSecondary] =useState(false);
    const [internships, setInternships] = useState([internship]);

    useEffect(() => {
        StudentClient.getInternships().then(setInternships).catch(err=>console.log(err));
    },[]);

    // function for setFavorite onChange
    const changeFavoriteStatus = () =>{
        setFavourite(!fav);
        console.log(fav);
    }
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root2}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <div className={classes.demo}>

                        <List style={{alignItems: "center"}}>
                           {internships.map(intern =>

                                   <ListItem style={{alignItems: "center", right: 50}}
                                    key={intern.id} >
                                       <ListItemText
                                           primary={intern.id}
                                           secondary={secondary ? 'Secondary text' : null}
                                       />

                                       <ListItemSecondaryAction style={{alignItems: "center", marginRight: -50}}>
                                           <FormControlLabel
                                               control={
                                                   <Checkbox
                                                       //checked={fav}
                                                       value={fav}
                                                       icon={<FavoriteBorderIcon/>}
                                                       checkedIcon={<FavoriteIcon/>}
                                                       onChange={changeFavoriteStatus}
                                                       inputProps={{
                                                           'aria-label': 'secondary checkbox'
                                                       }}/>}
                                               label=""
                                           />
                                           {intern.title}
                                           {intern.eployersName}
                                       </ListItemSecondaryAction>
                                   </ListItem>
                                )}
                           </List>
                    </div>
                </Grid>
            </Grid>
        </div>
        </ThemeProvider>
    );
}

export default SearchList;
