import React, {useEffect, useState} from "react";
import {IStudent} from "../../interfaces/HandleInterface";

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {useStyles} from "./RegistrationFormStyle/RegistrationFormStyle";
//import {StudentContext} from "../context/StudentContext";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditStudent from "./EditStudent";
import {Dialog, DialogActions, IconButton, ThemeProvider} from "@material-ui/core";
import theme from "../../../../Theme";

const DisplayStudent: React.FC<{student: IStudent}> = ({student}) => {
    const classes = useStyles();
    const [studentList, setStudentList]=useState();
    const [open, setOpen] = useState(false);
    const handleClickOpen =() =>{ setOpen(true); };
    const handleClose =() =>{ setOpen(false);};
    const updateStudent=(id:number, stud:[])=>{

    }

  return(
      <>
          <ThemeProvider theme={theme}>
      <IconButton  edge="end" arial-label="deletedit" color="secondary" onClick={handleClickOpen}>
          <EditIcon/>
      </IconButton>
          <Dialog open={open} onClose={handleClose} arial-labelledby="form-dialog-title">

         <td>{student.firstName}</td>
         <td>{student.lastName}</td>
         <td>{student.email}</td>
         <td>{student.phone}</td>
          <td>{student.username}</td>
         {/* <td>{student.password}</td>
         <td>{student.linkedInLink}</td>
         <td>{student.school}</td>
         <td>{student.eduction}</td>*/}

          <td>
              <ListItemSecondaryAction>
                 <Link to="/editStudent" className={classes.button} style={{ textDecoration: 'none', color:"#49B62E" }}  >
                     <EditIcon className={classes.edit}>
                              <EditStudent student={student} />
                      </EditIcon>
                  </Link>
              </ListItemSecondaryAction>
          </td>
          </Dialog>
          </ThemeProvider>
      </>
  );
}
export default DisplayStudent;
