import IAdds from "../interfaces/IAdds";


const addsList: Array<IAdds> = [
    {
        title: "Java",
        description: "Junior Java",
        id: 1,
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
    {
        title: "Java",
        description: "Senior Java",
        id: 2,
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
    {
        title: "Java",
        description: "Junior Java och MSQL",
        id: 3,
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
    {
        title: "TypScript",
        description: "hungrig utvecklare som gillar frontend",
        id: 4,
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
    {
        title: "Frontend",
        description: "vill börja nu",
        id: 5,
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
]

export default addsList;