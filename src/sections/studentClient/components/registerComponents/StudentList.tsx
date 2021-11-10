import React, {useContext, useEffect, useState} from "react";
import DisplayStudent from "./DisplayStudent";

//import {StudentContext} from "../context/StudentContext";
//import IStudent from "../../interfaces/IStudent";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditStudent from "./EditStudent";
import ListItemText from "@material-ui/core/ListItemText";
import theme from "../../../../Theme";
import { ThemeProvider } from "@material-ui/core";


const StudentList: React.FC<{}> = () => {
  // const studentList = useContext(StudentContext);
   const [showAlert, setShowAlert] = useState(false);


/*    useEffect(() => {
        fetch('https://localhost:8080/api/students', {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json()).then(data => setStudents(data));
    },[]);*/

    return(
        <>
            <ThemeProvider theme={theme}>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Students</b></h2>
                    </div>
              </div>
            </div>

            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>LinkedIn</th>
                    <th>School</th>
                    <th>Eduction</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
               {/* {
                    addStudent.map(student => (
                       <tr key={student.studentId} >
                       <DisplayStudent  student={student}/>

                      </tr>
                    ))
                }*/}
                </tbody>
            </table>
            </ThemeProvider>
        </>
    );
}
export default StudentList;
