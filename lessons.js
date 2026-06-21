const container = document.getElementById("container");

const subject = localStorage.getItem("subject");

// file mapping
const files = {
signs: "data/signs.js",
lights: "data/lights.js",
warnings: "data/warnings.js",
driving: "data/driving.js",
quiz: "data/quiz.js"
};

// load selected subject file
const script = document.createElement("script");
script.src = files[subject];

script.onload = () => {
if(subject === "quiz"){

let score = 0;

window.lessons.forEach((q, index)=>{

container.innerHTML += `
<div class="card">

<img src="${q.image}" width="100%" style="border-radius:10px;">

<h3>${q.question}</h3>

<div id="options-${index}"></div>

</div>
`;

q.options.forEach((opt,i)=>{

setTimeout(()=>{

document.getElementById(`options-${index}`).innerHTML += `
<button onclick="checkAnswer(${index},${i})">
${opt}
</button><br><br>
`;

},0);

});

});

window.checkAnswer = function(qIndex, selected){

if(window.lessons[qIndex].answer === selected){
score++;
}

document.getElementById("title").innerText =
"Score: " + score + "/" + window.lessons.length;

};

return;
}
// check data
if (!window.lessons || window.lessons.length === 0) {
container.innerHTML = "<h2>Nta masomo ahari</h2>";
return;
}

// show lessons
window.lessons.forEach((item) => {

container.innerHTML += `
<div class="card">
<h3>${item.title}</h3>
<p>${item.text}</p>
</div>
`;

});

};

// error handling
script.onerror = () => {
container.innerHTML = "<h2>File y'amasomo ntibashije gufunguka</h2>";
};


document.body.appendChild(script);
