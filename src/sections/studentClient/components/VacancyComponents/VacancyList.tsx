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
const VacancyList: React.FC<{internship:InternshipVacancy}> = ({internship}) => {

    const classes = useStyles();
    const [userId, SetUserId] = useState('935eb20c-fb91-4984-8341-a422c1f3c7aa');
    const [secondary, setSecondary] = useState(false);
    const [internships, setInternships] = useState([]);


    useEffect(() => {
        ApiStudentClient.getAppliedVacancies(userId).then(setInternships).catch(err => console.log(err));
    }, []);

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

export default VacancyList;
