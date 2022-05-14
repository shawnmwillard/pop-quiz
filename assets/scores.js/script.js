// Question index
var i = 0;

var timeLeft = 60;
var timerId;

var scoreStore = "highscore";

var finalScoreEl = document.querySelector("#finalscore");
var startButton = document.querySelector("#startbutton");
var ans1Btn = document.querySelector("#ans1");
var ans2Btn = document.querySelector("#ans2");
var ans3Btn = document.querySelector("#ans3");
var ans4Btn = document.querySelector("#ans4");
var submitButton = document.querySelector("#submitscore");
var questionEl = document.querySelector("#question");
var ansValidatorEl = document.querySelector("#question");
var timerEl = document.querySelector("#timer");
var message = document.querySelector("#answervalidation");
document.querySelector(".questionnaire").getElementsByClassName.display =
  "none";
document.querySelector(".endgame").getElementsByClassName.display = "none";
document.querySelector(".scoretimer").style.display = "none";
