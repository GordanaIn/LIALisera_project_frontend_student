import React, {useContext, useEffect, useState} from "react";
import addStudent from "../../mock-data/addStudent";
import DisplayStudent from "./DisplayStudent";
import addsStudent from "../../mock-data/addStudent";
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
   const [students, setStudents]=useState();/*[
       {
           id:1,
           firstName: "Joel",
           lastName:"Tesfaye",
           email:"Joel@ec.se",
           phone:"1234567",
           linkedInLink:"linkedin.com/joel",
           school:"EC Utbildning AB",
           eduction:"Diploma Java Programmer",
           user:{
               username:"joel123",
               password:"joelf123"
           }
       },
       {
           id:2,
           firstName: "Dawit",
           lastName:"Belay",
           email:"dawit@kth.se ",
           phone:"7834567",
           linkedInLink:"linkedin.com/dawit",
           school:"KTH",
           eduction:"System Engineer",
           user:{
               username:"dawit123",
               password:"jaff123"
           }
       },
       {
           id:2,
           firstName: "Beza",
           lastName:"Selam",
           email:"selam@ec.com ",
           phone:"7834567",
           linkedInLink:"linkedin.com/beza",
           school:"LNU",
           eduction:"Software Engineer",
           user:{
               username:"beza123",
               password:"beza123"
           }
       }
   ]);*/

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
                {
                    addStudent.map(student => (
                       <tr key={student.id} >
                       <DisplayStudent  student={student}/>

                      </tr>
                    ))
                }
                </tbody>
            </table>
            </ThemeProvider>
        </>
    );
}
export default StudentList;
