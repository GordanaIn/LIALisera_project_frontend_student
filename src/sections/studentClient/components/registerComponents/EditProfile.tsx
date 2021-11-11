import React, { useState } from "react";
import {Button, IconButton, ThemeProvider} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import TextField from "@material-ui/core/TextField";

import Dialog from "@material-ui/core/Dialog";
import {useStyles} from '../../styles/RegistrationFormStyle';
import {IStudent} from "../../interfaces/HandleInterface";
import {Link} from 'react-router-dom'
import theme from "../../../../Theme";


const EditProfile: React.FC<{student:IStudent|undefined}> = ({student}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState(student?.userId);
    const [firstName, setFirstName] = useState(student?.firstName);
    const [lastName, setLastName] = useState(student?.lastName);
    const [username, setUsername] = useState(student?.username);
    const [password, setPassword] = useState(student?.password);
    const [email, setEmail] = useState(student?.email);
    const [phone, setPhone] = useState(student?.phone);
    const [linkedIn, setLinkedIn] = useState(student?.linkedIn);

/*    const [schoolName, setSchoolName] = useState(student.school);
    const [education, setEduction] = useState(student.eduction);
    const [linkedIn, setLinkedIn] = useState(student.linkedInLink);*/


    const handleClickOpen =() =>{ setOpen(true); };
    const handleClose =() =>{ setOpen(false);};
    const handleProfileChange =() =>{
        setOpen(false);
        //console.log(value);

        // We need userId to edit the userlastName

        const stud={
            userId:userId,
            firstName:firstName,
            lastName:lastName,
            username:username,
            password:password,
            email:email,
            phone:phone,
            linkedIn:linkedIn
         }
        console.log(stud)

    };
    return(
        <>
            <ThemeProvider theme={theme}>
            <IconButton  edge="end" arial-label="deletedit" color="secondary" onClick={handleClickOpen}>
                <EditIcon/>
            </IconButton>
            <Dialog open={open} onClose={handleClose} arial-labelledby="form-dialog-title">
                <DialogTitle className={classes.h1} id="form-dialog-title"> Edit Profile </DialogTitle>
                <DialogContent className={classes.content}>
                    <div className={classes.username} >
                        <TextField id="standard-basic" label="First Name" variant="standard"   value={firstName}
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
                    <div className={classes.username} >
                        <TextField id="standard-basic" label="Username" variant="standard" value={username}
                                   onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className={classes.username} >
                        <TextField id="standard-basic" type="password"  label="password" variant="standard" value={password}
                                   onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className={classes.username} >
                        <TextField id="standard-basic" label="linkedIn" variant="standard" value={linkedIn}
                                   onChange={e => setLinkedIn(e.target.value)} />
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className={classes.button6}>
                        Cancel
                    </Button>

                    <Button onClick={handleProfileChange}  className={classes.button} > <Link to="/displayProfile" style={{textDecoration: 'none', color:"#fff"}} >
                        Edit Profile   </Link>
                    </Button>

                </DialogActions>
            </Dialog>
            </ThemeProvider>
        </>
    );
}
export default EditProfile;
