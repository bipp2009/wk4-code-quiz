//Get everything in here from the html
var startScreen = document.getElementById("start-screen");
var startbuttonquiz = document.getElementById("start-button");
var questionScreen = document.getElementById("question-screen");
var question = document.getElementById("question");
var answer = document.getElementById("answers");
var endScreen = document.getElementById("end-screen");
var timer = 60;
var userScore = 0;
var interval;
//Create an array of objects which will contain our questions
var questions = [
  {
    question: "what is 2+2",
    answers: ["4", "2", "77", "3"],
    correctAnswer: "4",
  },
  {
    question: "what is 5+5",
    answers: ["2", "10", "55", "11"],
    correctAnswer: "10",
  },
  {
    question: "what is 3+5?",
    answers: ["6", "8", "10", "9"],
    correctAnswer: "8",
  },
  {
    question: "what is 5-3?",
    answers: ["2", "7", "4", "1"],
    correctAnswer: "2",
  },
];

currentQuestionIndex = 0;

//Write a function for the button being clicked to start the quiz
function startgame() {
  //hide the start screen
  startScreen.setAttribute("class", "hide");
  //start the timer
  //start asking questions - using another function
  startQuestions();
  startTimer();
}
function startTimer() {
  interval = setInterval(function () {
    document.getElementById("timer").innerHTML = timer + " seconds remaining";
    if (timer > 0) {
      timer--;
    } else {
      endQuiz();
    }
  }, 1000);
}

function startQuestions() {
  var currentQuestion = questions[currentQuestionIndex];
  //Need to display a question from the variable above
  question.textContent = currentQuestion.question;
  //createa  loop which will create buttons for each possible answer
  //add event listeners to each of the buttons as we create them
  answer.innerHTML = "";
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = currentQuestion.answers[i];
    answerButton.addEventListener("click", checkAnswer);
    answer.appendChild(answerButton);
  }
}

function checkAnswer() {
  //This will be triggered when any of the answers are selected
  //Check the answer against the correct answer
  if (this.textContent === questions[currentQuestionIndex].correctAnswer) {
    alert("correct");
    userScore++;
  } else {
    timer = timer - 5;
    alert("Wrong answer 5 seconds deducted");
  }
  //conditional where we deduct time for incorrect answers
  //conditional where we check if they have time remaining and if they do show next question
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    startQuestions();
  }
}

function endQuiz() {
  userScore += timer;
  clearInterval(interval);
  questionScreen.setAttribute("class", "hide");
  endScreen.removeAttribute("class");


  var submit = document.getElementById("submit-score");
    submit.addEventListener("click", saveHighscre);
  //show highscores from local storage, input box for initials and submit score button (event listener)
}

function saveHighscre() {
  //function thats called when they submit their score and saves everything to local storage
  var usersInitials = document.getElementById("initials").value;
  var highscoreObject = {
      user: usersInitials,
      score: userScore
  }

  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  highscores.push(highscoreObject);
  window.localStorage.setItem("highscores", JSON.stringify(highscores)); 

  var highscoresList = document.getElementById("highscores-display");
  for (var i = 0; i < highscores.length; i++){
      var listEntry = document.createElement("li");
      listEntry.textContent = highscores[i].user + ":" + highscores[i].score;
      highscoresList.appendChild(listEntry)
  }

}

startbuttonquiz.addEventListener("click", startgame);
