const subject = localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText =
"📖 " + subject;

const lessonsData = {

"Mathematics":[

"Integers",

"Fractions",

"Decimals",

"Algebra"

],

"Physics":[

"Force",

"Energy",

"Electricity"

],

"English":[

"Grammar",

"Tenses",

"Vocabulary"

]

};

const lessons = lessonsData[subject] || [];

const container =
document.getElementById("lessonsContainer");


lessons.forEach(lesson=>{

const div =
document.createElement("div");

div.className="lesson-card";

div.innerHTML=`

<div class="lesson-title">

${lesson}

</div>

<div class="lesson-meta">

📖 Text Lesson

</div>

`;

div.onclick=()=>{

localStorage.setItem(

"lesson",

lesson

);

window.location.href=

"lesson-content.html";

};

container.appendChild(div);

});
