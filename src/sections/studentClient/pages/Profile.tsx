import React, {FC, useEffect, useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Box, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {LinkedIn} from "@material-ui/icons";
import Links from "../components/profileComponents/LinkedIn";
import DocFile from '../components/profileComponents/upLoad/DocFile';
import PersBrev from '../components/profileComponents/upLoad/PersBrev';
import Video from '../components/profileComponents/upLoad/Video';
import {Address, Person, Student} from '../interfaces/HandleInterface';
import {useStyles} from "../components/profileComponents/profileStyles/ProfileStyle";
import Button from "@material-ui/core/Button";
import StudentClient from "../Api/StudentClient";
const Profile: React.FC<Student> = () => {
    const classes = useStyles();
    const [dataLoading,finishLoading]=useState(false);
    const [studList1,setStudList1] = useState<Student>();

    useEffect(() =>{
        setTimeout(function (){
            StudentClient.getStudents().then(students=>setStudList1(students)).catch((error) => console.error(error));
        }, 10)
    },[]);


    const [studList, setStudList] = useState<Student>(/*{
        person: {
            fName: "Dawit",
            lName: 'Tesfaye',
            email: 'dawit@gmail.com',
            phone:'123456',
            // address: {
            //     street: 'da123',
            //     postCode: '1234',
            //     city: 'Stockholm'
            // },
            //photoLink: 'www.eyu.com/Eyu-Png',
         },
        linkedInLink:'www.linkedIn.com/Eyu',
        school:'LNU',
    }*/)

    return (
        <Grid container spacing={4} className={classes.root}>
            <Avatar src="/broken-image.jpg"/>
            <Paper elevation={3} style={{ width: 400, height: 400, background: 'white', }}>
                <h1 className={classes.h1}>Student Profile </h1>
                <div className={classes.p}>{/*
                    <p >FName: {studList.person.fName}</p>
                    <p >LName: {studList.person.lName}</p>
                    <p>Email: {studList.person.email}</p>
                    <p>Phone: {studList.person.phone}</p>
                    <p>Street: {studList.person.address.street}</p>
                    <p>City: {studList.person.address.city}</p>
                    <p>School Name: {studList.school}</p>*/}

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
