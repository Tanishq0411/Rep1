const quesbox = document.getElementById("quesbox")
const options = document.querySelectorAll(".option");
const btn = document.getElementsByClassName("btn");
let right = 0;
console.log("HI");
const questions = [{
    'que': 'What is an operating system?',
    'a': 'interface between the hardware and application programs',
    'b': 'collection of programs that manages hardware resources',
    'c': 'system service provider to the application programs',
    'd': 'all of the mentioned',
    'correct': 'd'
}, {
    'que': 'In Operating Systems, which of the following is/are CPU scheduling algorithms?',
    'a': 'Priority',
    'b': 'Round Robin',
    'c': 'Shortest Job First',
    'd': 'All of the mentioned',
    'correct': 'd'
}, {
    'que': 'To access the services of the operating system, the interface is provided by the ___________',
    'a': 'Library',
    'b': 'System calls',
    'c': ' Assembly instructions',
    'd': ' API',
    'correct': 'b'
}, {
    'que': 'CPU scheduling is the basis of ___________',
    'a': 'multiprogramming operating systems',
    'b': 'larger memory sized systemsSystem calls',
    'c': 'multiprocessor systems',
    'd': 'none of the mentioned',
    'correct': 'a'
}];
const total = questions.length;

let i = 0;

const loadquestion = () => {
    if (i == total) {
        return endQuiz();
    }
    reset();
    const data = questions[i];
    quesbox.innerText = `${i + 1})  ${data.que}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}


const getAnswer = () => {
    let a;
    options.forEach((input) => {
        if (input.checked) {
            a = input.value;
            console.log(a);
        }
    })
    return a;
};



const submitQuiz = () => {
    const data = questions[i];
    const ans = getAnswer();
    console.log(ans);
    if (ans === data.correct) {
        right++;
    }
    i++;
    loadquestion();
}

const reset = () => {
    options.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `Thank you for playing <br> Your Score is ${right}/ ${total}`;
}

loadquestion();