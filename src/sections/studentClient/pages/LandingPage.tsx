import React, {FC, useEffect, useState} from "react";
import {Grid, Paper} from "@material-ui/core";

const styles = {
    bgImageContainer: {
        flexGrow: 1,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url("https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
    }
}

const LandingPage: FC<{}> = () => {
    return (
        <Grid
            container
            direction={'column'}
            justify={'center'}
            style={styles.bgImageContainer}>
            <div>
                <h1 style={{alignItems: 'center', textAlign: 'center', color: 'white'}}>Welcome to LiaLisera</h1>
                <Paper style={{
                    background: 'transparent',
                    color: 'white',
                    paddingBottom: '5%',
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    textAlign: 'center'
                }}>
                    This is a professional platform made to help students and companies in their search for internships.<br/>
                    With the help of LiaLisera you can create and manage your own profile.
                </Paper>
            </div>
        </Grid>
    )
}

export default LandingPage;