import React, {FC, useEffect, useState} from 'react';
import {Box, Paper} from "@material-ui/core";
import {ProfileImage} from "../components/profileComponents/upLoad/ProfileImage";
import DocFile from '../components/profileComponents/upLoad/DocFile';
import PersBrev from '../components/profileComponents/upLoad/PersBrev';
import Video from '../components/profileComponents/upLoad/Video';
import {Address, Person, Student} from '../interfaces/HandleInterface';
import {useStyles} from "../components/profileComponents/profileStyles/ProfileStyle";
import Button from "@material-ui/core/Button";
import {TextField, ThemeProvider} from "@mui/material";
import theme from "../../../Theme";
import addsStudent from "../mock-data/addStudent";
import EditProfile from "../components/registerComponents/EditProfile";

const Profile: React.FC<Student> = () => {
    const classes = useStyles();
    const [dataLoading,finishLoading]=useState(false);
    //const [students,setStudents] = useState<Student>();
    const [studentList, setStudentList] = useState(addsStudent.filter(s=>s.user.username==='eyuel')[0]);


    useEffect(() => {
        //setStudentList(addsStudent.filter(s=>s.user.username==='eyuel'));
        /*   let userId=1;
           ApiStudentClient.getStudent(userId).then(setStudents).catch(err=>console.log(err));*/
    },[]);

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
        //ApiStudentClient.addUser(user).then(res=>console.log(res)).catch(err=>console.log(err));
        // SetStudent(person);
        //console.log(stud.fName, stud.lName, stud.email, stud.pNumber);
        // console.log(student?.fName, student?.lName, student?.email, student?.phone, student?.street, student?.postCode, student?.city);
    }
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>

                <Paper elevation={3} className={classes.paper}>
                    <form   onSubmit={e => onSubmit(e)}>
                        <h1 className={classes.h3}>Student Profile</h1>
                        <Paper elevation={2} className={classes.photo}>
                            <ProfileImage/>
                        </Paper>
                        <div className={classes.root5}>
                            <div className={classes.coloumn1}>
                                <div className={classes.username} >
                                    <TextField className={classes.textfield} id="standard-basic" label="First Name" variant="standard"   value={studentList.firstName}
                                               onChange={e => setFirstName(e.target.value)}/>
                                </div>
                                <div className={classes.username} >
                                    <TextField id="standard-basic" label="Last Name" variant="standard"   value={studentList.lastName}
                                               onChange={e => setLastName(e.target.value)}/>
                                </div>
                                <div className={classes.username} >
                                    <TextField id="standard-basic" label="Email" variant="standard"   value={studentList.email}
                                               onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className={classes.username} >
                                    <TextField id="standard-basic" label="Phone" variant="standard"   value={studentList.phone}
                                               onChange={e => setPhone(e.target.value)}/>
                                </div>
                                <div className={classes.password}>
                                    <TextField id="standard-basic" label="LinkedIn" variant="standard" value={studentList.linkedInLink}
                                               onChange={e => setLinkedIn(e.target.value)}/>
                                </div>
                            </div>
                            <div className={classes.coloumn2}>
                                <div className={classes.username} >
                                    <TextField id="standard-basic" label="School Name" variant="standard"   value={studentList.school}
                                               onChange={e => setSchoolName(e.target.value)}/>
                                </div>
                                <div className={classes.username} >
                                    <TextField id="standard-basic" label="Eduction" variant="standard" value={studentList.eduction}
                                               onChange={e => setEduction(e.target.value)} />
                                </div>
                                <div className={classes.username} >
                                    <TextField id="standard-basic" label="Username" variant="standard" value={studentList.user.username}
                                               onChange={e => setUsername(e.target.value)} />
                                </div>
                                <div className={classes.password}>
                                    <TextField  type="password" id="standard-basic" label="Password" variant="standard" value={studentList.user.password}
                                                onChange={e => setPassword(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className={classes.button1}>

                            <Button variant="contained" color="secondary" component="span">
                                <EditProfile student={studentList} />Edit
                            </Button>

                        </div>
                        <div className={classes.root5}>
                            <div className={classes.button2}>
                                <DocFile/>
                            </div>
                            <div className={classes.button3}>
                                <PersBrev/>
                            </div>
                            <div className={classes.button4}>
                                <Video/>
                            </div>
                        </div>
                    </form>
                </Paper>
            </div>
        </ThemeProvider>
    );

}
export default Profile;
