import React, {FC, useEffect, useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 2,
            maxWidth: 752,
            alignItems: "center"
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
            alignItems: "center",
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    }),
);



const SearchList: (internship: Internship) => JSX.Element = (internship: Internship) => {
    const classes = useStyles();
    const [fav, setFavourite] = useState(false);
    const [secondary, setSecondary] =useState(false);
    const [internships, setInternsips] = useState([]);

    useEffect(() => {
        StudentClient.getInternships().then(setInternsips);
    },[]);


    // function for setFavorite onChange
    const changeFavoriteStatus = () =>{
        setFavourite(!fav);
        console.log(fav);
    }


    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                    <div className={classes.demo}>
                        <List style={{alignItems: "center"}}>
                           {/* {internships.map(intern =>
                                    <ListItem key={intern.id}>
                                        <ListItemText primary={intern.title} secondary={intern.description} />
                                        <ListItemSecondaryAction>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}*/}
                                <ListItem style={{alignItems: "center", right: 30}}>
                                    <ListItemText

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
                                    </ListItemSecondaryAction>
                                </ListItem>
                            <div>
                            </div>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default SearchList;
