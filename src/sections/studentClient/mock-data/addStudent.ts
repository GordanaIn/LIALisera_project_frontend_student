
import {IStudent} from "../../studentClient/interfaces/HandleInterface";


const addsStudent: Array<IStudent> = [
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
            username:"eyuel",
            password:"password"
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
             username:"yy",
             password:"yy1"
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
            username:"zz",
            password:"zz1"
        }
    },

]

export default addsStudent;
