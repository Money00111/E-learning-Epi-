const subject = localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText =
"📖 " + subject;


const lessonsData = {

"Mathematics":[
"Lesson 1",
"Lesson 2",
"Lesson 3",
"Lesson 4"
],

"Physics":[
"Lesson 1",
"Lesson 2",
"Lesson 3"
],

"English":[
"Lesson 1",
"Lesson 2"
],

"Biology":[
"Lesson 1",
"Lesson 2"
],

"Chemistry":[
"Lesson 1",
"Lesson 2"
]

};


const lessons = lessonsData[subject] || [];

const container =
document.getElementById("lessonsContainer");


if(lessons.length===0){

container.innerHTML=
"<h3>No lessons found</h3>";

}


lessons.forEach(l=>{

const div =
document.createElement("div");

div.className =
"lesson-card";


div.innerHTML = `

<div class="lesson-thumb">▶</div>

<div class="lesson-content">

<div class="lesson-title">
${l}
</div>

<div class="lesson-meta">
📚 Video Lesson
</div>

</div>

`;

div.onclick = ()=>{

alert("Wafunguye "+l);

// nyuma tuzashyiramo video

};


container.appendChild(div);

});
