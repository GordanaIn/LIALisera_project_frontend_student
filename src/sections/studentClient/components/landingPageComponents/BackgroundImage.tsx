import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    bgImageContainer: {
        flexGrow: 1,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
    },
    title: {
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    },
    paper: {
        background: 'transparent',
        color: 'white',
        paddingBottom: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        textAlign: 'center'
    }
}));

export default function BackgroundImage() {
    const classes = useStyles();

    return (
        <Grid className={classes.bgImageContainer}
            container
            direction={'column'}
            justify={'center'}
            >
            <div>
                <h1 className={classes.title}>Welcome to LiaLisera</h1>
                <Paper className={classes.paper}>
                    This is a professional platform made to help students and companies in their search for internships.<br/>
                    With the help of LiaLisera you can create and manage your own profile.
                </Paper>
            </div>
        </Grid>
    );
}