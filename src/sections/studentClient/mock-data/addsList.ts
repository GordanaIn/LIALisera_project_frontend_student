import IAdds from "../interfaces/IAdds";


const addsList: Array<IAdds> = [
    {
        title: "Java",
        description: "Junior Java",
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
    {
        title: "Java",
        description: "Senior Java",
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
    {
        title: "Java",
        description: "Junior Java och MSQL",
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
    {
        title: "TypScript",
        description: "hungrig utvecklare som gillar frontend",
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
    {
        title: "Frontend",
        description: "vill börja nu",
        created: new Date(+new Date() - Math.floor(Math.random() * 1000000000)),
        updated: new Date(+new Date() - Math.floor(Math.random() * 1000000000))
    },
]

export default addsList;