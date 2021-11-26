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
import theme from "../../../../Theme";
import {useStyles} from "../../styles/SearchStyles";


const SearchList:FC<{}> = ({}) => {

    const classes = useStyles();
    const [favs, setFavourites] = useState<Array<string> |any>();
    const [secondary, setSecondary] =useState(false);
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        ApiStudentClient.getInternships().then(setInternships).catch(err=>console.log(err));
        //get all fav of specific student and put favs
        ApiStudentClient.getFavourite("d7b8759b-fbe3-4d51-9950-feb748970753").then(res=>{
             console.log(res)
            setFavourites(res)
        }).catch(err=>console.log(err));

     },[]);

    // function for setFavorite onChange
    const changeFavoriteStatus = (intern: any ) => {
        console.log("Inside button event")
        /** If it's fav remove from list if not add to the list */
        if (favs?.includes(intern.id)) {
            ApiStudentClient.removeFavorite("d7b8759b-fbe3-4d51-9950-feb748970753", intern.id).then(result => {
                if (result)
                    setFavourites(favs.filter((item:string)=> item!== intern.id));
            }).catch(err => console.log(err));
        } else {
            ApiStudentClient.addFavorite("d7b8759b-fbe3-4d51-9950-feb748970753", intern.id).then(result => {
               if (result) setFavourites([...favs, intern.id])
            }).catch(err => console.log(err));
        }
    }
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root2}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <div className={classes.demo}>

                        <List style={{alignItems: "center"}}>
                           {internships.map((intern:any) =>

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
                                                       checked={favs?.includes(intern.id)}
                                                       value={favs}
                                                       icon={<FavoriteBorderIcon/>}
                                                       checkedIcon={<FavoriteIcon/>}
                                                       onChange={( event)=>{changeFavoriteStatus(intern)
                                                           ;console.log("hello here")} }
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
