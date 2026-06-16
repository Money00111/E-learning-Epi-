const score = localStorage.getItem("score") || 0;

document.getElementById("score").innerText =
"Final Score: " + score;
