const container = document.getElementById("lessonsContainer");

const content = document.getElementById("lessonContent");


lessons.forEach(lesson=>{


const card = document.createElement("div");


card.className="lesson-card";


card.innerHTML=`

<h3>${lesson.title}</h3>

`;


card.onclick=()=>{


content.innerHTML=

lesson.content;


};


container.appendChild(card);


});
