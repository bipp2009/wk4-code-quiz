//Get everything in here from the html
var startScreen = document.getElementById("start-screen");
var startbuttonquiz = document.getElementById("Start-button")
var question = document.getElementById("question")
var answer = document.getElementById("answers")

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
    }
]
//Write a function for the button being clicked to start the quiz