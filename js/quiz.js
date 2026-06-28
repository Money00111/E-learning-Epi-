let timer;

function startTimer(){

    updateTimer();

    timer = setInterval(()=>{

        state.timeLeft--;

        saveState(state);

        updateTimer();

        if(state.timeLeft<=0){

            clearInterval(timer);

            localStorage.setItem("score",state.score);

            window.location="result.html";

        }

    },1000);

}

function updateTimer(){

    let minutes=Math.floor(state.timeLeft/60);

    let seconds=state.timeLeft%60;

    document.getElementById("timer").innerText=
        String(minutes).padStart(2,"0")+":"+
        String(seconds).padStart(2,"0");

}
let state = getState();

function loadQuestion(){

  const q = questions[state.current];

  document.getElementById("question").innerText = q.question;

  document.getElementById("counter").innerText =
    (state.current + 1) + " / " + questions.length;

  document.getElementById("sign").src = q.image;

  const box = document.getElementById("answers");
  box.innerHTML = "";

  q.options.forEach((opt, i) => {

    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "answer-btn";

    // show previous answer if exists
    if(state.answers[state.current] === i){
      btn.classList.add(i === q.answer ? "correct" : "wrong");
    }

    btn.onclick = () => {

      state.answers[state.current] = i;

      if(i === q.answer){
        state.score++;
      }

      saveState(state);
      loadQuestion();
    };

    box.appendChild(btn);
  });

  updateProgress();
}

function updateProgress(){
  const percent = ((state.current + 1) / questions.length) * 100;
  document.getElementById("bar").style.width = percent + "%";
}

document.getElementById("next").onclick = () => {
  if(state.current < questions.length - 1){
    state.current++;
    saveState(state);
    loadQuestion();
  }
};

document.getElementById("prev").onclick = () => {
  if(state.current > 0){
    state.current--;
    saveState(state);
    loadQuestion();
  }
};

loadQuestion();
