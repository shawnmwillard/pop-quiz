// Question index
var i = 0;

var timeLeft = 60;
var timerId;

var scoreStore = "highscore";

var finalScoreEl = document.querySelector("#finalscore");
var startButton = document.querySelector("#starterbutton");
var ans1Btn = document.querySelector("#ans1");
var ans2Btn = document.querySelector("#ans2");
var ans3Btn = document.querySelector("#ans3");
var ans4Btn = document.querySelector("#ans4");
var submitButton = document.querySelector("#submitscore");
var questionEl = document.querySelector("#question");
var ansValidatorEl = document.querySelector("#answervalidation");
var timerEl = document.querySelector("#timer");
var message = document.querySelector("#answervalidation");
document.querySelector(".questionnaire").style.display = "none";
document.querySelector(".endgame").style.display = "none";
document.querySelector(".scoretimer").style.display = "none";

// Questions
var questions = [
  {
    question: "Arrays in JavaScript can be used to store",
    answers: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the Above",
    ],
    correctAnswer: "4. All of the Above",
  },
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: "3. Alerts",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. Terminal or Bash",
      "3. FOR-loops",
      "4. console.log('')",
    ],
    correctAnswer: "4. console.log('')",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables",
    answers: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
    correctAnswer: "3. Quotes",
  },
];

// MAIN LOGIC
// Timer
function countdown() {
  // Removes a second each time this function runs
  timeLeft--;
  timerEl.textContent = timeLeft;

  // Ends the quiz if the timer runs out
  if (timeLeft <= 0) {
    endQuiz();
  }
}

// Event listener on the button to start the quiz
startButton.addEventListener("click", askQuestions);

// Question iterator
function askQuestions() {
  timerEl.textContent = timeLeft;
  // Displays the timer
  document.querySelector(".scoretimer").style.display = "inline";
  // Sets the interval in which countdown(); runs to 1000 milliseconds, or 1 second
  timerId = setInterval(countdown, 1000);
  // Shows the main quiz UI
  document.querySelector(".questionnaire").style.display = "block";
  // Hides the start quiz UI
  document.querySelector("#starter").textContent = null;

  // Buttons for answers, and on click runs the checkAnswer function, passing the answer.
  ans1Btn.addEventListener("click", function () {
    checkAnswer(ans1Btn);
  });

  ans2Btn.addEventListener("click", function () {
    checkAnswer(ans2Btn);
  });

  ans3Btn.addEventListener("click", function () {
    checkAnswer(ans3Btn);
  });

  ans4Btn.addEventListener("click", function () {
    checkAnswer(ans4Btn);
  });

  questionHandler(0);
}

// Question UI handler
function questionHandler(i) {
  questionEl.textContent = questions[i].question;
  ans1Btn.textContent = questions[i].answers[0];
  ans2Btn.textContent = questions[i].answers[1];
  ans3Btn.textContent = questions[i].answers[2];
  ans4Btn.textContent = questions[i].answers[3];
}

// Answer checker
function checkAnswer(element) {
  // Get the current questions index and correct answer and compare it to what the user chose
  correct = questions[i].correctAnswer;
  if (element.textContent === correct) {
    timeLeft = timeLeft + 10;
    answerMessage("Correct!");
  } else {
    answerMessage("Incorrect!");
    timeLeft = timeLeft - 10;
  }

  // Move on to next question
  i++;

  // Runs if there are no more questions
  if (i === questions.length) {
    endQuiz();
  } else {
    questionHandler(i);
  }
}

// Displays a message to confirm if the answer chosen was correct or incorrect.
function answerMessage(messageContent) {
  message.textContent = messageContent;
  setTimeout(function () {
    message.textContent = null;
  }, 1500);
}

// Ends the quiz
function endQuiz() {
  // Stops the timer from running
  clearInterval(timerId);
  // Hides the timer
  document.querySelector(".scoretimer").style.display = "none";
  // Hides the main quiz UI
  document.querySelector(".questionnaire").style.display = "none";
  // Shows the endgame UI that gives the player the final score and options to save high score
  document.querySelector(".endgame").style.display = "block";
  // Updates final score with what ever was left on the clock
  finalScoreEl.textContent = timeLeft;
}

// Store high scores
submitButton.addEventListener("click", function (event) {
  // Prevents the browser from reloading on form submit
  event.preventDefault();
  var oldScore = JSON.parse(localStorage.getItem(scoreStore));
  if (oldScore === null) {
    oldScore = Array();
  }
  var theScore = timeLeft;
  var playerName = document.getElementById("name").value.trim();
  var highscore = {
    name: playerName,
    score: theScore,
  };
  oldScore.push(highscore);
  localStorage.setItem(scoreStore, JSON.stringify(oldScore));
  window.location.href = "scores.html";
});
