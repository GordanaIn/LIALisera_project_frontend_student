
import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
export const StudentContext = createContext({});

const StudentContextProvider =(props)=>{
    const [student, setStudent]=useState([
        {id:uuidv4(),  firstName: "Joel", lastName:"Tesfaye", email:"Joel@ec.se", phone:"1234567", linkedInLink:"linkedin.com/joel", school:"EC Utbildning AB", eduction:"Diploma Java Programmer", user:{ username:"joel123", password:"joelf123" }},
        {id:uuidv4(),  firstName: "Dawit", lastName:"Belay", email:"dawit@kth.se ", phone:"7834567", linkedInLink:"linkedin.com/dawit", school:"KTH", eduction:"System Engineer", user:{ sername:"dawit123", password:"jaff123" }},
        {id:uuidv4(), firstName: "Beza", lastName:"Selam", email:"selam@ec.com ", phone:"7834567", inkedInLink:"linkedin.com/beza", school:"LNU", eduction:"Software Engineer", user:{ username:"beza123", password:"beza123" }},
    ])
    const sortedStudent = student.sort((a,b)=>(a.name < b.name ? -1 : 1));
    const addStudent = (firstName, lastName, email, phone,linkedInLink,school,eduction) => {
        setStudent([...student , {id:uuidv4(), firstName, email, phone, linkedInLink,school, eduction}])
    }

    const deleteStudent= (id) => { setStudent(student.filter(student => student.id !== id))}

    const updateStudent= (id, updateStudent) => {  setStudent(student.map((student) => student.id === id ? updateStudent : student))  }
    return (
        <StudentContext.Provider value={{sortedStudent, addStudent, deleteStudent, updateStudent}}>
            {props.children}
        </StudentContext.Provider>
    )
};
export default StudentContextProvider;