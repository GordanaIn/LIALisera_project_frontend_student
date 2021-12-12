import React, {useEffect, useState} from "react";

import ApiStudentClient from "../Api/ApiStudentClient";
import { Paper} from "@material-ui/core";

import {ProfileImage} from "../components/upLoad/ProfileImage";
import theme from "../../../Theme";
import {TextField, ThemeProvider} from "@mui/material";
import {useStyles} from "../styles/ProfileStyle";
import Button from "@material-ui/core/Button";
import EditProfile from "../components/registerComponents/EditProfile";
import {IStudent} from "../interfaces/HandleInterface";


const Profile: React.FC<{}> = () => {
    const classes = useStyles();
    const [userId, SetUserId] = useState('935eb20c-fb91-4984-8341-a422c1f3c7aa');
    const [student, setStudent] = useState<IStudent>();

    useEffect(() => {
        ApiStudentClient.fetchStudent(userId).then(setStudent).catch(err => console.log(err));
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
                    <div className={classes.root5}>
                        <div className={classes.coloumn1}>
                            <div className={classes.username}>
                                <TextField className={classes.textfield} id="standard-basic" variant="standard"
                                           value={student?.firstName}/>
                            </div>
                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" value={student?.lastName}/>
                            </div>

                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" value={student?.phone}/>
                            </div>

                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" value={student?.schoolName}/>
                            </div>
                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" value={student?.linkedIn}/>
                            </div>

                        </div>
                    </div>


                    <div className={classes.button1}>
                        {student ?
                            <Button variant="contained" color="secondary" component="span">
                                <EditProfile student={student}/>Edit
                            </Button>
                            : null}
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