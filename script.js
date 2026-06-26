let currentQuestion = parseInt(localStorage.getItem("currentQuestion")) || 0;
let score = parseInt(localStorage.getItem("score")) || 0;

function nextQuestion() {
  currentQuestion++;

  localStorage.setItem("currentQuestion", currentQuestion);
  localStorage.setItem("score", score);

  loadQuestion();
}

loadQuestion();

<div id="question"></div>
<div id="options"></div>
