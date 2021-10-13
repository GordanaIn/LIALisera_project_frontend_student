
const StudentClient = {
    fetchPerson:async ()=>{
        return await(await fetch('http://localhost:8080/persons')).json();
    },
    addAddress: async (address) => {
        const res = await fetch('http://localhost:8080/address/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(address),
        })
        const data = await res.json()
    },
    addUser: async (user) => {
        const res = await fetch('http://localhost:8080/users/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        //const data = await res.json()
    },
    fetchStudents:async ()=>{
        return await(await fetch('http://localhost:8080/students')).json();
    },
    fetchStudent:async (studId)=>{
        return await(await fetch(`http://localhost:8080/students/${studId}`)).json();
    },
    getStudents:()=>{
        return fetch('http://localhost:8080/students').then(res=>res.json());
    },

    getStudent:(studId)=>{
        return (studId != null) ?
            fetch( `http://localhost:8080/students/${studId}`)
                .then(resp => resp.json()).catch(err=>console.log(err))
            : "Student not found";
    },
    searchStudents:(status)=>{
        return fetch( `http://localhost:8080/stud/search/${status}`)
            .then(resp => resp.json());
    },
    getInternships:() => {
        return fetch(`http://localhost:8080/internship/allInternships`)
            .then(resp => resp.json());
    },
}

export default StudentClient;
