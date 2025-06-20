const Questions = [
  {
    question : "Which is the fastest land animal?",
    answers : [
      {text:"Cheetah", correct: true},
      {text:"Lion", correct:false},
      {text:"Elephant", correct:false},
      {text:"Mouse", correct:false}
    ]
  },
  {
    question : "Which is the capital of France?",
    answers : [
      {text:"Rome", correct: false},
      {text:"Paris", correct:true},
      {text:"New Delhi", correct:false},
      {text:"Tokyo", correct:false}
    ]
  },
  {
    question : "Which is the largest planet in our solar system?",
    answers : [
      {text:"Earth", correct: false},
      {text:"Venus", correct:false},
      {text:"Mars", correct:false},
      {text:"Jupiter", correct:true}
    ]
  },w
  {
    question : "Which is the largest ocean on Earth?",
    answers : [
      {text:"Pacific Ocean", correct: true},
      {text:"Indian Ocean", correct:false},
      {text:"Atlantic Ocean", correct:false},
      {text:"Arctic Ocean", correct:true}
    ]
  }
];

const questionElement = document.getElementById("Question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

let Score = 0;

function startQuiz() {
  currentQuestionIndex = 0;

  score = 0;
  
  nextButton.innerHTML = "Next";
  showQuestion();

}

function showQuestion() {
  resetState();
  let currentQuestion = Questions[currentQuestionIndex]; 
  
  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons .appendChild(button);
    button.addEventListener("click", selectAnswer);
    if (answer.correct) {
      button.fataset,correct = answer.correct;
      

    }
    if(answer.correct) {

    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";

  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectBtn = e.target
}
startQuiz();



