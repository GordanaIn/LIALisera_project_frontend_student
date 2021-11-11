import React, {useEffect, useState} from "react";

import ApiStudentClient from "../Api/ApiStudentClient";
import {Avatar, Paper} from "@material-ui/core";

import {ProfileImage} from "../components/upLoad/ProfileImage";
import theme from "../../../Theme";
import {TextField, ThemeProvider} from "@mui/material";
import {useStyles} from "../styles/ProfileStyle";
/*import DocFile from "../components/profileComponents/upLoad/DocFile";
import PersBrev from "../components/profileComponents/upLoad/PersBrev";
import Video from "../components/profileComponents/upLoad/Video";*/
import Button from "@material-ui/core/Button";
import EditProfile from "../components/registerComponents/EditProfile";
import {IStudent} from "../interfaces/HandleInterface";


const Profile: React.FC<IStudent> = () => {
    const classes = useStyles();
    const [students, setStudents] = useState<[IStudent]>();
    //const [student, setStudent] = useState<[IStudent]>();
    const [userId, SetUserId]=useState('c336b30e-d624-4ead-a06f-834f17b8e7ce');
    const [student, setStudent] = useState(students?.filter(s=>s.userId==='c336b30e-d624-4ead-a06f-834f17b8e7ce')[0]);


    useEffect(() => {
        ApiStudentClient.getStudents().then(setStudents).catch(err => console.log(err));
    }, []);

    useEffect(() => {
        ApiStudentClient.getStudent(`c336b30e-d624-4ead-a06f-834f17b8e7ce`).then(setStudent).catch(err => console.log(err));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>

                <Paper elevation={3} className={classes.paper}>
                {/*    <form onSubmit={e => onSubmit(e)}>*/}

                        <h1 className={classes.h3}>Student Profile</h1>
                        <Paper elevation={2} className={classes.photo}>
                            <ProfileImage/>
                        </Paper>
                                 <div className={classes.root5} >
                                    <div className={classes.coloumn1}>
                                        <div className={classes.username} >
                                            <TextField className={classes.textfield}  id="standard-basic"  variant="standard" value={student?.firstName}/>
                                        </div>
                                        <div className={classes.username} >
                                            <TextField id="standard-basic"  variant="standard"  value={student?.lastName}/>
                                        </div>
                                        <div className={classes.username} >
                                            <TextField id="standard-basic"  variant="standard" value={student?.email}/>
                                        </div>
                                        <div className={classes.username} >
                                            <TextField id="standard-basic"  variant="standard"   value={student?.phone}/>
                                        </div>

                                        <div className={classes.username} >
                                            <TextField id="standard-basic"  variant="standard" value={student?.username}/>
                                        </div>
                                        <div className={classes.username} >
                                        <TextField id="standard-basic"  variant="standard"   value={student?.schoolName}/>
                                         </div>
                                        <div className={classes.username} >
                                            <TextField id="standard-basic"  variant="standard"   value={student?.eductionTitle}/>
                                        </div>
                                        <div className={classes.username} >
                                            <TextField id="standard-basic"  variant="standard"   value={student?.linkedIn} />
                                        </div>

                                    </div>
                                </div>


                        <div className={classes.button1}>

                               <EditProfile student={student}/>



                        </div>
                      {/*  <div className={classes.root5}>
                            <div className={classes.button2}>
                                <DocFile/>
                            </div>
                            <div className={classes.button3}>
                                <PersBrev/>
                            </div>
                            <div className={classes.button4}>
                                <Video/>
                            </div>
                        </div>*/}
                    {/*</form>*/}
                </Paper>
            </div>
        </ThemeProvider>
    );
}
export default Profile;
