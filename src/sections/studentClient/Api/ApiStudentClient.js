const ApiStudentClient = {
    fetchPerson: async () => {
        return await (await fetch('http://localhost:8081/persons')).json();
    },
    addAddress: async (address) => {
        const res = await fetch('http://localhost:8081/address/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(address),
        })
        const data = await res.json()
    },
    addUser: async (user) => {
        const res = await fetch('http://localhost:8081/users/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        //const data = await res.json()
    },
    fetchStudents: async () => {
        return await (await fetch('http://localhost:8081/students')).json();
    },
    fetchStudent: async (userId) => {
        return await (await fetch(`http://localhost:8081/students/${userId}`)).json();
    },
    getStudents: () => {
        return fetch(`http://localhost:8081/api/student`, {
            method: 'GET',
        }).then(res => res.json());
    },
    getStudent: (userId) => {
        return fetch(`http://localhost:8081/api/student/${userId}`).then(res => res.json());
    },
    getAStudent: (studId) => {
        return (studId != null) ?
            fetch(`http://localhost:8081/students/${studId}`)
                .then(resp => resp.json()).catch(err => console.log(err))
            : "Student not found";
    },
    searchStudents: (status) => {
        return fetch(`http://localhost:8081/stud/search/${status}`)
            .then(resp => resp.json());
    },

    getInternships: () => {
        return fetch("http://localhost:8081/api/internship")
            .then(resp => resp.json());
    },

    addFavorite: async (userId, internshipId) => {
        const res = await fetch(`http://localhost:8081/api/internship/addFavorite/${userId}/${internshipId}"`, {
            method: 'PUT',
        })
    },

    updateStudent: async (userId, student) => {
        const res = await fetch(`http://localhost:8081/api/student/update/${userId}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(student),
        })
    },
    getStudentByUser: (userId) => {
        return fetch(`http://localhost:8081/api/student/${userId}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }).then(response => response.json());
    },
}

export default ApiStudentClient;
