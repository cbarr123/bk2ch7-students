const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
//* STEP 1 - reference of where to put the data
const studentContainer = document.querySelector("#container")

//* STEP 2 - create HTML representation of data

const createStudentComponent = (student) => {
    return `
        <div class="student">
            <h1 class="xx-large passing">${student.name}</h1>
            <section class="bordered dashed section--padded">${student.subject}</section>
            <aside class="pushRight">${student.info}</aside>
            <aside>Current Score: ${student.score}</aside>
        </div>
    `
}

const createFailingStudentComponent = (student) => {
    return `
        <div class="student">
            <h1 class="failing">${student.name}</h1>
            <section>${student.subject}</section>
            <aside>${student.info}</aside>
            <aside>Current Score: ${student.score}</aside>
        </div>
    `
}
    
//* STEP 3 - Invoke the function
//* STEP 4 - Inject into html
students.forEach(student => {
    if (student.score >= 60 ) {
        const htmlRep = createStudentComponent( student);
        studentContainer.innerHTML += htmlRep;
    } else {
        const htmlRep = createFailingStudentComponent( student);
        studentContainer.innerHTML += htmlRep;
    }
})



