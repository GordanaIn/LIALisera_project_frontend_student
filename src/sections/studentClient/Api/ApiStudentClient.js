const ApiStudentClient = {

    addInternship:async (student)=>{
        return  await (await fetch('http://localhost:8081/api/student/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(student)
        })).json()
    },
    fetchStudent: (userId) => {
        return fetch(`http://localhost:8081/api/student/${userId}`).then(res => res.json());
    },
    fetchStudents: () => {
        return fetch(`http://localhost:8081/api/student`, {
            method: 'GET',
        }).then(res => res.json());
    },
    getInternships: () => {
        return fetch("http://localhost:8081/api/internship")
            .then(resp => resp.json());
    },
    applyVacancy: async (userId, internshipId) => {
       return  await fetch(`http://localhost:8081/api/student/${userId}/${internshipId}`, {
            method: 'PATCH',
           headers: {
               'Content-type': 'application/json',
           },
        }).then(res=>res.json());
    },
    addFavorite: async (userId, internshipId) => {
        const res = await fetch(`http://localhost:8081/api/internship/addFavorite/${userId}/${internshipId}`, {
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
