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

import ApiStudentClient from "../../Api/ApiStudentClient";
import {InternshipVacancy} from "../../interfaces/HandleInterface";
import theme from "../../../../Theme";
import {useStyles} from "../../styles/SearchStyles";


const SearchList:FC<{internship: InternshipVacancy}> = ({internship}) => {

    const classes = useStyles();
    const [favs, setFavourites] = useState([]);
    const [secondary, setSecondary] =useState(false);
    const [internships, setInternships] = useState([internship]);

    useEffect(() => {
        ApiStudentClient.getInternships().then(setInternships).catch(err=>console.log(err));
        //ApiStudentClient.getFavorites().then(setFavorites);
    },[]);

    // function for setFavorite onChange
    const changeFavoriteStatus = (internship: any) => {
       /* if (favs.includes(internship.id)) {
            ApiStudentClient.removeFavorite("a00ce4f5-32f6-4453-ad84-edfd5221f72c", internship.id).then(result => {
                if (result) // remove from 'favs'
            }).catch(err => console.log(err));
        } else {
            ApiStudentClient.addFavorite("a00ce4f5-32f6-4453-ad84-edfd5221f72c", internship.id).then(result => {
                if (result) setFavourites([...favs, internship.id])
            }).catch(err => console.log(err));
        }*/
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
                                                       value={favs}
                                                       icon={<FavoriteBorderIcon/>}
                                                       checkedIcon={<FavoriteIcon/>}
                                                       onChange={changeFavoriteStatus}
                                                       inputProps={{
                                                           'aria-label': 'secondary checkbox'
                                                       }}/>}
                                               label=""
                                           />
                                           {intern.title}
                                           {intern.description}
                                           {intern.datePosted}
                                           {intern.duration}
                                           {intern.contactEmployer}
                                           {intern.contactPhone}


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
