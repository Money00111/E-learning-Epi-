let currentQuestion = parseInt(localStorage.getItem("currentQuestion")) || 0;
let score = parseInt(localStorage.getItem("score")) || 0;
function loadQuestion() {

  // 🔥 IMPORTANT: niba yararangiye
  if (currentQuestion >= questions.length) {
    document.getElementById("question").innerText = "Urangije quiz!";
    document.getElementById("options").innerHTML = "";
    return;
  }

  const q = questions[currentQuestion];

  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      if (index === q.answer) {
        score++;
      }

      nextQuestion();
    };

    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;

  localStorage.setItem("currentQuestion", currentQuestion);
  localStorage.setItem("score", score);

  loadQuestion();
}

// START
loadQuestion();
