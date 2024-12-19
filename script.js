
const questions = [
    {
        question: "lebonbon jahames quiz",  
        answers:[
            { text: "starta quizzzz", correct: true}
        ]
    },
    {
        question: "whjo is my sunshine",  
        answers: [
            { text: "majkel jådan", correct: false}, 
            { text: "stefan kurry", correct: false}, 
            { text: "jejms haden", correct: false}, 
            { text: "lebonbon jejms", correct: true}, 
        ]
    },
    {
        question: "who is luh goat in baskemtbal",  
        answers: [
            { text: "majkel jådan", correct: false}, 
            { text: "stefan kurry", correct: false}, 
            { text: "lebonbon jejms", correct: true}, 
            { text: "jejms haden", correct: false}, 
        ]
    },
    {
        question: "you heard me ? hit the roley store with the roley on",  
        answers: [
            { text: "skibidi", correct: false}, 
            { text: "what was our getaway car? A jag portfolio", correct: true}, 
            { text: "webelebadadoobadaminamananalala lajfstajl", correct: false}, 
            { text: "tee grizzlet luh goat", correct: true}, 
        ]
    },
    { question: "hur många nba championships har lebonbon vunnit",  
        answers: [
            { text: "typ kanske hmmmmm typ ehhhhhh aa typ så", correct: false}, 
            { text: "0,2", correct: false}, 
            { text: "4", correct: true}, 
            { text: "12", correct: false}, 
        ]
    },
    { question: "vilka år vann han ?",  
        answers: [
            { text: "1998, 2001, 2009, 2011 ", correct: false}, 
            { text: "2012, 2013, 2016, 2020", correct: true}, 
            { text: "shi ion kno cuh", correct: false}, 
            { text: "allihopa", correct: false}, 
        ]
    },
    { question: "har gingers själar",  
        answers: [
            { text: "beror på", correct: false}, 
            { text: "nej", correct: true}, 
            { text: "ja", correct: false}, 
            { text: "free youngboy", correct: false}, 
        ]
    },
    { question: "är Ye washed?",  
        answers: [
            { text: "ja", correct: false}, 
            { text: "nej", correct: true}, 
            { text: "Ye är den bästa artisten världen någonsin kommer se folk förstår inte hans konst och tar grejer ur kontext. jag skulle ta en kule nej ett helt magasin för att rädda min gloriösa konung Kanye West", correct: true}, 
            { text: "hon borde gå i pension", correct: false}, 
        ]
    },
    { question: "hur lång är Melker?",  
        answers: [
            { text: "2 meter", correct: true}, 
            { text: "199cm", correct: false}, 
            { text: "198cm", correct: false}, 
            { text:  "super lång nonchalant dreadhead", correct: true}, 
        ]
    },
    { question: "kommer ward någonsin hålla käften om sitt sexliv?",  
        answers: [
            { text: "ja", correct: false}, 
            { text: "kanske", correct: false}, 
            { text: "nej", correct: true}, 
            { text: "skib", correct: false}, 
        ]
    },
    { question: "hur mycket väger Isak",  
        answers: [
            { text: "7,5 sten", correct: true}, 
            { text: "47kg", correct: false}, 
            { text: "som en fjäder", correct: false}, 
            { text: "50kg", correct: true}, 
        ]
    },
];
const questionElement = document.getElementById("question")
const answerbuttons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);

    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled= true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score-1} out of ${questions.length-1}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
    
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();