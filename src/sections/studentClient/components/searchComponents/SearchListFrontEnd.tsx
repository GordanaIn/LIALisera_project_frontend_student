import React, {useState} from 'react';
import {makeStyles,  createStyles, ThemeProvider} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import List from '@material-ui/core/List';
//import IAdds from "../../interfaces/IAdds";
import theme from "../../../../Theme";
import {Theme} from "@mui/material/styles";
import {InternshipVacancy} from "../../interfaces/HandleInterface";
import Button from "mui-button";
import {Simulate} from "react-dom/test-utils";
import ApiStudentClient from "../../Api/ApiStudentClient";


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
const SearchListFrontEnd: React.FC<{internship:InternshipVacancy}> = ({internship}) => {

    const classes = useStyles();
    const [fav, setFavorite] = useState(false);
    const [secondary, setSecondary] = useState(false);

    //let {title, description, datePosted, duration, contactPhone,contactEmployer}=internship;

    const changeFavoriteStatus = () => {
        setFavorite(!fav);
    }
    const apply = (internship: any ) => {
        ApiStudentClient.applyVacancy(`a00ce4f5-32f6-4453-ad84-edfd5221f72c`, internship?.id).then(res=>alert("Vacant application is successful")).catch(err => console.log(err));
    }

        return (
            <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={7}>
                        <div className={classes.demo}>
                            <List style={{alignItems: "center"}}>

                                <ListItem style={{alignItems: "center", right: 30}}>
                                    <ListItemText
                                        primary={internship?.title}
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
                                    <div>  Description: {internship?.description} </div>
                                    <div> Posted Date : {internship?.datePosted}</div>
                                    <div> Duration : {internship?.duration}</div>
                                      <div>Contact Phone : {internship?.contactPhone}</div>

                                </div>
                                <Button onClick={() => apply(internship)}>Apply </Button>

                            </List>
                        </div>
                    </Grid>
                </Grid>
            </div>
            </ThemeProvider>
        );
    }

   export default SearchListFrontEnd;
