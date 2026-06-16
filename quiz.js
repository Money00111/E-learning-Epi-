const questions = [
{
question: "2 + 2 = ?",
options: ["3","4","5","6"],
answer: "4"
},
{
question: "5 × 3 = ?",
options: ["10","12","15","20"],
answer: "15"
}
];

const container = document.getElementById("quizContainer");

questions.forEach((q,index)=>{

const div = document.createElement("div");

div.innerHTML = `
<h3>${q.question}</h3>

<label><input type="radio" name="q${index}" value="${q.options[0]}"> ${q.options[0]}</label><br>

<label><input type="radio" name="q${index}" value="${q.options[1]}"> ${q.options[1]}</label><br>

<label><input type="radio" name="q${index}" value="${q.options[2]}"> ${q.options[2]}</label><br>

<label><input type="radio" name="q${index}" value="${q.options[3]}"> ${q.options[3]}</label><br><br>
`;

container.appendChild(div);

});

document.getElementById("submitBtn").onclick = ()=>{

let score = 0;

questions.forEach((q,index)=>{

const selected =
document.querySelector(`input[name="q${index}"]:checked`);

if(selected && selected.value === q.answer){
score++;
}

});

document.getElementById("result").innerText =
`Score: ${score}/${questions.length}`;

};
