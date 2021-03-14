/ pseudo code
// start button
//   geteventlister - clcik to start function 
// timer  starts 
// question appears ?hide 
// answering question triggers next question. ?loop
// incorrect answer --> subtract from timer (if statement)
// game over = all answered or time=0 
//           = save initials and score. 
var timeLeft = 120;
var startButton=document.getElementById("start_btn"); 
var timeEl=document.getElementById("timer");
var questionNumber = 0;
// var aEl=document.getElementById("buttonA");
// var bEl=document.getElementById("buttonB");
// var cEl=document.getElementById("buttonC");
// var dEl=document.getElementById("buttonD");
var questionText=document.getElementById("askQuestion"); 
var answerEl=document.createElement("h2")
var questions =[
    q1={ 
        question: "what is 2+2",
        answers: ["4" , "2", "77", "3"],
        correctAnswer: "4",
    },
    q2={
        question: "what is 5+5",
        answers: ["2", "10", "55", "11"],
        correctAnswer: "10",
    }
]
function quiz () {
for (var i=0 ; i<questions.length; i++) {
    questionText.textContent=(questions[i].question);
    for (var j=0; j<questions[i].answers.length; j++) {
answerEl.textContent=(questions[i].answers[j]);
console.log (answerEl);
    }
}
}
quiz()
startButton.addEventListener("click", setTime());
function setTime() {
    console.log("in the function")
    timeEl.textContent = (timeLeft);
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = timeLeft;
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // endQuiz();
      }
    }, 1000);
  }
white_check_mark
eyes
raised_hands
React
Reply

10:03
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Event Prevent Default Demo</title>
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class= "card-contents"></div>
        <h1 id="askQuestion"> Question appears here</h1>
        <div id="timer">
            <h2> seconds remaining </h2>
        </div>
        <form>
          <button class="button" id="answerButton">Answer 1</button>>
          <button class="button" id="answerButton">Answer 2</button>>
          <button class="button" id="answerButton">Answer 3</button>>
          <button class="button" id="answerButton">Answer 4</button>>
        </form>
        <button class="button" id="start_btn"> START !</button>
      </div>
    </div>
  </div>
  <script src="./js/script.js"></script>
</body>
</html>