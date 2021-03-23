//Get everything in here from the html
var startScreen = document.getElementById("start-screen");
var startbuttonquiz = document.getElementById("start-button")
var question = document.getElementById("question")
var answer = document.getElementById("answers")
var timer = 60;
var interval;
//Create an array of objects which will contain our questions
var questions =[
    { 
        question: "what is 2+2",
        answers: ["4" , "2", "77", "3"],
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
        answers: ["2","7","4","1"],
        correctAnswer: "2"
    }
]

currentQuestionIndex = 0; 

//Write a function for the button being clicked to start the quiz
function startgame(){
    //hide the start screen
    startScreen.setAttribute("class", "hide")
    //start the timer
    //start asking questions - using another function
    startQuestions();
    startTimer();
}
function startTimer() {

   
    interval = setInterval(function() {
        document.getElementById('timer').innerHTML = timer + ' seconds remaining';
        
        if (timer > 0) {
            timer --;
        } else {
            endQuiz();
        }

    }, 1000);

   
    }

function startQuestions(){
    var currentQuestion = questions[currentQuestionIndex];
    //Need to display a question from the variable above
    question.textContent = currentQuestion.question
    //createa  loop which will create buttons for each possible answer
    //add event listeners to each of the buttons as we create them
    answer.innerHTML = "";
    for(var i = 0; i < currentQuestion.answers.length; i++){
        var answerButton = document.createElement("button");
        answerButton.textContent = currentQuestion.answers[i];
        answerButton.addEventListener("click", checkAnswer)
        answer.appendChild(answerButton)
    }; 
    
}

function checkAnswer(){
    //This will be triggered when any of the answers are selected
    //Check the answer against the correct answer
    if (this.textContent === questions[currentQuestionIndex].correctAnswer){
        alert("correct")
    } else {
        timer= timer-5;
            alert("Wrong 5 seconds deducted")
    }
    //conditional where we deduct time for incorrect
    //conditional where we check if they have time remaining and if they do show next question
    if(currentQuestionIndex === questions.length) {
        endQuiz()
    } else {
        currentQuestionIndex++
       
        startQuestions();
    }
    //if out of time - end quiz function called
    //document.addEventListener("keydown", function(event) {
    // If the timercount is zero, exit function
        if (timerCount === 0) {}
          return;
}

function endQuiz(){
    clearInterval(interval)
    if(currentQuestionIndex =)
    //hide the questions screen
    //show highscores from local storage, input box for initials and submit score button (event listener)
}

function saveHighscre(){
    //function thats called when they submit their score and saves everything to local storage
}





startbuttonquiz.addEventListener("click", startgame)

