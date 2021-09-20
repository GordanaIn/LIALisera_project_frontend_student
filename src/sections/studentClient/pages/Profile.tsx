import React, {FC, useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Box, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {LinkedIn} from "@material-ui/icons";
import Links from "../components/profileComponents/LinkedIn";
import DocFile from '../components/profileComponents/upLoad/DocFile';
import PersBrev from '../components/profileComponents/upLoad/PersBrev';
import Video from '../components/profileComponents/upLoad/Video';
//import {Address} from  '../Interface/HandleInterface';
import {useStyles} from "../components/profileComponents/profileStyles/ProfileStyle";
import Button from "@material-ui/core/Button";

//It's
interface Student {
    name: string;
    email: string;

}

const Profile: React.FC<Student> = () => {

    const classes = useStyles();
    const [studList, setStudList] = useState<Student>({
        name: "Mjau",
        email: "dd@bb.com",
    })
    return (
        <Grid container spacing={4} className={classes.root}>
            <Avatar src="/broken-image.jpg"/>
            <Paper elevation={3} style={{ width: 400, height: 400, background: 'white', }}>
                <h1 className={classes.h1}> Profile </h1>
                <div className={classes.p}>
                    <p >Name: {studList.name}</p>
                    <p>Email: {studList.email}</p>
                </div>
                <Button variant="contained" color="primary" component="span">
                 Edit
                </Button>
            </Paper>
            <Paper elevation={3} style={{ width: 400, height: 200, background: 'white', alignItems: 'center', marginTop:-30}}>
            <Links/>
            <DocFile/>
            <PersBrev/>
            <Video/>

            </Paper>

        </Grid>
    );

}
export default Profile;
