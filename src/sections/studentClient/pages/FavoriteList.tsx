import React, {useEffect, useState} from 'react';
import {makeStyles, createStyles, ThemeProvider} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import List from '@material-ui/core/List';
import theme from "../../../Theme";
import {Theme} from "@mui/material/styles";
import {InternshipVacancy} from "../interfaces/HandleInterface";
import Button from "mui-button";
import {Simulate} from "react-dom/test-utils";
import ApiStudentClient from "../Api/ApiStudentClient";


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
function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const FavoriteList : React.FC<{internship:InternshipVacancy}> = ({internship}) => {
    const classes = useStyles();
    const [favs, setFavourites] = useState<Array<string> | any>();
    const [userId, SetUserId] = useState('4e7c93d6-0240-49c1-89dc-f5e9445bfbb8');
    const [secondary, setSecondary] = useState(false);
    const [internships, setInternships] = useState([]);

    const apply = (intern: any) => {
        ApiStudentClient.applyVacancy(userId,  intern.id).then(res => alert("Vacant application is successful")).catch(err => console.log(err));
    }

    useEffect(() => {
        ApiStudentClient.getInternships().then(setInternships).catch(err => console.log(err));
        //get all fav of specific student and put favs
        ApiStudentClient.getFavourite(userId).then(res => {
            console.log(res)
            setFavourites(res)
        }).catch(err => console.log(err));

    }, []);


    // function for setFavorite onChange
    const changeFavoriteStatus = (intern: any) => {
        console.log("Inside button event")
        /** If it's fav remove from list if not add to the list */
        if (favs?.includes(intern.id)) {
            ApiStudentClient.removeFavorite(userId, intern.id).then(result => {
                if (result)
                    setFavourites(favs.filter((item: string) => item !== intern.id));
            }).catch(err => console.log(err));
        } else {
            ApiStudentClient.addFavorite(userId,  intern.id).then(result => {
                if (result) setFavourites([...favs, intern.id])
            }).catch(err => console.log(err));
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <div className={classes.demo}>
                            <List style={{alignItems: "center"}}>

                                <ListItem style={{alignItems: "center", right: 30}}
                                >
                                    <ListItemText
                                        primary={internship.title}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />

                                    <ListItemSecondaryAction style={{alignItems: "center", marginRight: -50}}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={favs?.includes(internship.id)}
                                                    icon={<FavoriteBorderIcon/>}
                                                    checkedIcon={<FavoriteIcon/>}
                                                    onChange={( event)=>{changeFavoriteStatus(internship)
                                                    ;console.log("hello here")} }
                                                />}
                                            label=""
                                        />

                                    </ListItemSecondaryAction>
                                </ListItem>

                                <div>
                                    <div> Description: {internship.description} </div>
                                    <div> Posted Date: {internship.datePosted}</div>
                                    <div> Duration: {internship.duration}</div>
                                    <div>Contact Phone: {internship.contactPhone}</div>
                                </div>
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
       
    );
}
export default FavoriteList;
