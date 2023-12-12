let score = 0;
let points = 10;

let questions = document.body.childNodes;
let questionsIterator = 1;

function correct(button){
    score += points;
    button.style.backgroundColor = 'green';
    let parenet = button.parentNode;
    let siblings = parenet.childNodes;
    siblings.forEach(element => {
        element.disabled = true;
    });
    questionsIterator+=2;
    questions[questionsIterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}

function incorrect(button){
    score -= points;
    button.style.backgroundColor = 'red';
    let parenet = button.parentNode;
    let siblings = parenet.childNodes;
    siblings.forEach(element => {
        element.disabled = true;
    });
    questionsIterator+=2;
    questions[questionsIterator].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
}

function calculate(button){
    button.innerHTML = "Score: " + score;
}