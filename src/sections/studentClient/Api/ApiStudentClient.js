const ApiStudentClient = {

    fetchStudent: (userId) => {
        return fetch(`http://localhost:8081/api/student/${userId}`).then(res => res.json());
    },
    getAppliedVacancies:(userId) => {
        return fetch(`http://localhost:8081/api/internship/vacancyLists/${userId}`).then(res => res.json());
    },
    getInternships: () => {
        return fetch("http://localhost:8081/api/internship").then(resp => resp.json());
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
        return await fetch(`http://localhost:8081/api/internship/addFavorite/${userId}/${internshipId}`, {
            method: 'PATCH',
        }).then(res=>res.json())
    },
    getFavourite: async (userId) => {
        return fetch(`http://localhost:8081/api/internship/favorites/${userId}`)
            .then(resp => resp.json());
    },
    removeFavorite:async (userId, internshipId)=>{
        return  await fetch(`http://localhost:8081/api/internship/removeFavorite/${userId}/${internshipId}`, {
            method: 'DELETE',
        }).then(res=>res.json())
    },
    updateStudent: async (userId, student) => {
        const res = await fetch(`http://localhost:8081/api/student/update/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(student),
        })
    },

}

export default ApiStudentClient;
