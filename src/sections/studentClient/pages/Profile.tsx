import React, {FC, useEffect, useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Box, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {LinkedIn} from "@material-ui/icons";
import {ProfileImage} from "../components/profileComponents/upLoad/ProfileImage";
import Links from "../components/profileComponents/LinkedIn";
import DocFile from '../components/profileComponents/upLoad/DocFile';
import PersBrev from '../components/profileComponents/upLoad/PersBrev';
import Video from '../components/profileComponents/upLoad/Video';
import {Address, Person, Student} from '../interfaces/HandleInterface';
import {useStyles} from "../components/profileComponents/profileStyles/ProfileStyle";
import Button from "@material-ui/core/Button";
import StudentClient from "../Api/StudentClient";
import {Link, Route} from "react-router-dom";
import {TextField, ThemeProvider} from "@mui/material";
import theme from "../../../Theme";

const Profile: React.FC<Student> = (Props) => {
    const classes = useStyles();
    const [dataLoading,finishLoading]=useState(false);
    const [studList1,setStudList1] = useState<Student>();

    const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [phone, setPhone] = useState("");
        const [schoolName, setSchoolName] = useState("");
        const [education, setEduction] = useState("");
        const [linkedIn,setLinkedIn] = useState("");
        const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user={
        username:username,
        email:email,
        password:password,
    }
        let student={
        userId:{

    },
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        schoolName: schoolName,
        eduction:education,
    }
        console.log(user);
        //UserService.saveUser(user).then(res=>console.log(res)).catch(err=>console.log(err));
        //StudentClient.addUser(user).then(res=>console.log(res)).catch(err=>console.log(err));
        // SetStudent(person);
        //console.log(stud.fName, stud.lName, stud.email, stud.pNumber);
        // console.log(student?.fName, student?.lName, student?.email, student?.phone, student?.street, student?.postCode, student?.city);
    }
        return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Paper elevation={3} className={classes.paper}>
                    <form   onSubmit={e => onSubmit(e)}>
                        <h3 className={classes.h3}>Student Profile</h3>
                        <ProfileImage/>

                        <div className={classes.coloumn1}>
                        <div className={classes.username} >
                            <TextField className={classes.textfield} id="standard-basic" label="First Name" variant="standard"   value={firstName}
                                       onChange={e => setFirstName(e.target.value)}/>
                        </div>
                        <div className={classes.username} >
                            <TextField id="standard-basic" label="Last Name" variant="standard"   value={lastName}
                                       onChange={e => setLastName(e.target.value)}/>
                        </div>
                        <div className={classes.username} >
                            <TextField id="standard-basic" label="Email" variant="standard"   value={email}
                                       onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className={classes.username} >
                            <TextField id="standard-basic" label="Phone" variant="standard"   value={phone}
                                       onChange={e => setPhone(e.target.value)}/>
                        </div>
                        <div className={classes.password}>
                            <TextField id="standard-basic" label="LinkedIn" variant="standard" value={linkedIn}
                                       onChange={e => setLinkedIn(e.target.value)}/>
                        </div>
                        </div>
                        <div className={classes.coloumn2}>
                        <div className={classes.username} >
                            <TextField id="standard-basic" label="School Name" variant="standard"   value={schoolName}
                                       onChange={e => setSchoolName(e.target.value)}/>
                        </div>
                        <div className={classes.username} >
                            <TextField id="standard-basic" label="Eduction" variant="standard" value={education}
                                       onChange={e => setEduction(e.target.value)} />
                        </div>
                        <div className={classes.username} >
                            <TextField id="standard-basic" label="Username" variant="standard" value={username}
                                       onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className={classes.password}>
                            <TextField id="standard-basic" label="Password" variant="standard" value={password}
                                       onChange={e => setPassword(e.target.value)}/>
                        </div>
                        </div>
                        <div className={classes.button1}>
                            <Link to="/displayProfile" style={{ textDecoration: 'none', color: '#15a905' }} >
                            <Button variant="contained" color="secondary" component="span">
                                Edit
                            </Button>
                            </Link>
                        </div>
                        <div className={classes.button2}>
                        <DocFile/>
                        </div>
                        <div className={classes.button3}>
                        <PersBrev/>
                        </div>
                        <div className={classes.button4}>
                        <Video/>
                        </div>
                    </form>
                </Paper>
            </div>
        </ThemeProvider>



                        // useEffect(() =>{
    //     setTimeout(function (){
    //         StudentClient.getStudents().then(students=>setStudList1(students)).catch((error) => console.error(error));
    //     }, 10)
    // },[]);
    //
    //
    // const [studList, setStudList] = useState<Student>(/*{
    //     person: {
    //         fName: "Dawit",
    //         lName: 'Tesfaye',
    //         email: 'dawit@gmail.com',
    //         phone:'123456',
    //         // address: {
    //         //     street: 'da123',
    //         //     postCode: '1234',
    //         //     city: 'Stockholm'
    //         // },
    //         //photoLink: 'www.eyu.com/Eyu-Png',
    //      },
    //     linkedInLink:'www.linkedIn.com/Eyu',
    //     school:'LNU',
    // }*/)
    //
    // return (
    //     <Grid container spacing={4} className={classes.root}>
    //
    //         <Paper elevation={3} style={{ width: 400, height: 400, background: 'white', }}>
    //         <ProfileImage/>
    //         </Paper>
    //
    //         <Paper elevation={3} style={{ width: 400, height: 400, background: 'white', }}>
    //             <h1 className={classes.h1}>Student Profile </h1>
    //             <div className={classes.p}>{/*
    //                 <p >FName: {studList.person.fName}</p>
    //                 <p >LName: {studList.person.lName}</p>
    //                 <p>Email: {studList.person.email}</p>
    //                 <p>Phone: {studList.person.phone}</p>
    //                 <p>Street: {studList.person.address.street}</p>
    //                 <p>City: {studList.person.address.city}</p>
    //                 <p>School Name: {studList.school}</p>*/}
    //
    //             </div>
    //
    //                 <Link to="/studentList" className={classes.button} style={{ textDecoration: 'none', color: '#15a905' }} >
    //                     <Button variant="contained" color="primary" component="span">
    //                     Edit
    //                     </Button>
    //                 </Link>
    //
    //
    //         </Paper>
    //         <Paper elevation={3} style={{ width: 400, height: 200, background: 'white', alignItems: 'center', marginTop:-30}}>
    //         <Links/>
    //         <DocFile/>
    //         <PersBrev/>
    //         <Video/>
    //         </Paper>
    //
    //     </Grid>
    );

}
export default Profile;
