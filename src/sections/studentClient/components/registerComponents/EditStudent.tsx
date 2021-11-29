import React, {useState} from "react";
import {IStudent} from "../../interfaces/HandleInterface";
import {useStyles} from "../../styles/RegistrationFormStyle";
import {Dialog, DialogActions, DialogContent, IconButton, Paper, TextField, ThemeProvider} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import EditIcon from "@material-ui/icons/Edit";
import theme from "../../../../Theme";

const EditStudent: React.FC<{student:IStudent}> = ({student}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [education, setEduction] = useState('');
    const [linkedIn, setLinkedIn] = useState('');

    const handleClickOpen =() =>{ setOpen(true); };
    const handleClose =() =>{ setOpen(false);};
    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {

    }
    return(
        <ThemeProvider theme={theme}>
        <div>
            <div className={classes.root}>
             {/*   <IconButton  edge="end" arial-label="deletedit" onClick={handleClickOpen}>
                    <EditIcon/>
                </IconButton>
                <Dialog open={open} onClose={handleClose} arial-labelledby="form-dialog-title">*/}
                <Paper elevation={3} className={classes.paper}>
                    <form   onSubmit={e => onSubmit(e)}>
                        <h1 className={classes.h3}>Edit Profile</h1>
                        <DialogContent>
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
                            <TextField id="standard-basic" label="Password" variant="standard" value={password}
                                       onChange={e => setPassword(e.target.value)}/>
                        </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>

                            <div className={classes.button}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    type="submit">
                                    Edit Profile
                                </Button>
                            </div>

                        </DialogActions>


                    </form>
                </Paper>
             {/*   </Dialog>*/}
            </div>
        </div>
        </ThemeProvider>
    );
}
export default EditStudent;
