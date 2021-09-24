import React, {FC, useEffect, useState} from 'react';
import {useStyles} from "./RegistrationFormStyle/RegistrationFormStyle";
import {Grid, Paper} from "@material-ui/core";
import StudentClient from "../../Api/StudentClient";
//import {Address, Person, Student} from '..../Interface/HandleInterface';
//import StudentClient from "../Api/StudentClient";


interface Person {
    fName: string,
    lName:  string,
    email: string,
    phone: string,
    street: string,
    postCode:string,
    city:string,
};


const RegisterForm: React.FC<Person> = () => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [postCode, setPostCode] = useState("");
    const [city, setCity] = useState("");

    const [student,SetStudent]=useState<Person>();

    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        let user={
            fName: firstName,
            lName: lastName,
            email: email,
            phone: phone,
            street: street,
            postCode:postCode,
            city:city,
        }
        console.log(user);
        //StudentClient.addAddress(user).then(res=>console.log(res)).catch(err=>console.log(err));
        StudentClient.addUser(user).then(res=>console.log(res)).catch(err=>console.log(err));

       // SetStudent(person);
        //console.log(stud.fName, stud.lName, stud.email, stud.pNumber);
       // console.log(student?.fName, student?.lName, student?.email, student?.phone, student?.street, student?.postCode, student?.city);
    }
    return (
        <Grid container spacing={4} className={classes.root}>
         <Paper elevation={3} style={{ width: 400, height: 400, background: 'white', }}>
          <form   onSubmit={e => onSubmit(e)}>
            <h2 className={classes.h1} >Sign up</h2>
            <div  >
                <label className={classes.label} htmlFor="firstName" >First Name: </label>
                <input
                    type="text"
                    className={classes.textBox}
                    placeholder="Enter first name"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="fName" className={classes.label} >Last Name: </label>
                <input
                    type="text"
                    className={classes.textBox}
                    placeholder="Enter last name"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    />
            </div>
            <div className="form-group">
                <label className={classes.label} htmlFor="email" >Email: </label>
                <input
                    type="text"
                    className={classes.textBox}
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                 />
            </div>
                <div className="form-group">
                <label className={classes.label} htmlFor="phoneNumber" >Phone: </label>
                <input
                    type="text"
                    className={classes.textBox}
                    placeholder="Enter phone number"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                </div>
            <div className="form-group">
                <label className={classes.label} htmlFor="fName" >Street: </label>
                <input
                    className={classes.textBox}
                    type="text"
                    placeholder="Enter street"
                    name="street"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                   />
            </div>
            <div className="form-group">
                <label className={classes.label} htmlFor="fName" >PostCode: </label>
                <input className={classes.textBox}
                   type="text"
                   placeholder="Enter postCode"
                   name="postCode"
                   value={postCode}
                   onChange={e => setPostCode(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className={classes.label} htmlFor="city"> City :</label>
                <input className={classes.textBox}
                    type="text"
                    placeholder="Enter City"
                    id="city"
                   name="city"
                   value={city}
                   onChange={e => setCity(e.target.value)}
                />
            </div>

            <div className="form-group">
                <button className={classes.button}
                    type="submit"
                    //onClick={onSubmit}
                >
                    Create Student
                </button>
            </div>
        </form>
       </Paper>
        </Grid>
    );
}
export default RegisterForm;