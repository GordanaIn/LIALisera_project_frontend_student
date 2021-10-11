import React, { useState } from "react";
import {IconButton} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {useStyles} from './RegistrationFormStyle/RegistrationFormStyle';
import IStudent from "../../interfaces/IStudent";


const EditProfile: React.FC<{student:IStudent}> = ({student}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState(student.firstName);
    const [lastName, setLastName] = useState(student.lastName);
    const [email, setEmail] = useState(student.email);
    const [username, setUsername] = useState(student.user.username);
    const [password, setPassword] = useState(student.user.password);
    const [phone, setPhone] = useState(student.phone);
    const [schoolName, setSchoolName] = useState(student.school);
    const [education, setEduction] = useState(student.eduction);
    const [linkedIn, setLinkedIn] = useState(student.linkedInLink);


    const handleClickOpen =() =>{ setOpen(true); };
    const handleClose =() =>{ setOpen(false);};
    const handleChangeUsername =() =>{
        setOpen(false);
        //console.log(value);
        console.log(student.user.username);
        const stud={
            firstName:firstName,
            lastName:lastName,
            email:email,
            user:{
                username:username,
                password:password
            },
            phone:phone,
            schoolName:schoolName,
            education:education,
            linkedIn:linkedIn
        }
        console.log(stud)
        //UpdateUser(props.user.id,value);
    };
    return(
        <>
            <IconButton  edge="end" arial-label="deletedit" onClick={handleClickOpen}>
                <EditIcon/>
            </IconButton>
            <Dialog open={open} onClose={handleClose} arial-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Edit user name </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To change user name
                    </DialogContentText>
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
                        <TextField type="password" id="standard-basic" label="Password" variant="standard" value={password}
                                   onChange={e => setPassword(e.target.value)}/>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>

                    <Button onClick={handleChangeUsername} color="primary">
                        Edit Student
                    </Button>

                </DialogActions>
            </Dialog>

        </>
    );
}
export default EditProfile;