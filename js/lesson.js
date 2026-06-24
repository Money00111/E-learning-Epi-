let current = 0;

const box = document.getElementById("lessonBox");

show();

function show(){

const l = window.lessons[current];

box.innerHTML = `
<div class="lesson-card">

<img src="${l.image}" class="lesson-img">

<h2>${l.title}</h2>

<p>${l.text}</p>

<button onclick="toggleAnswer()">Show Answer</button>

<div id="answer" style="display:none;">
${l.answer}
</div>

</div>
`;

updateProgress();

}

function toggleAnswer(){

const a = document.getElementById("answer");

if(a.style.display === "none"){
a.style.display = "block";
}else{
a.style.display = "none";
}

}

function next(){

if(current < window.lessons.length - 1){
current++;
show();
saveProgress();
}

}

function prev(){

if(current > 0){
current--;
show();
}

}

function updateProgress(){

let p = Math.round(((current+1)/window.lessons.length)*100);

document.getElementById("bar").style.width = p + "%";
document.getElementById("percent").innerText = p + "%";
}

function saveProgress(){
localStorage.setItem("lessonProgress", current);
}
