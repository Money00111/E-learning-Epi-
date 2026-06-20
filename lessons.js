const level = localStorage.getItem("level");
const subject = localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText = subject;

let file = "";

// PRIMARY 1
if(level==="Primary 1"){

if(subject==="Mathematics")
file="lessons/P1/mathematics.js";

else if(subject==="English")
file="lessons/P1/english.js";

else if(subject==="Kinyarwanda")
file="lessons/P1/kinyarwanda.js";

else if(subject==="Science and Elementary Technology")
file="lessons/P1/set.js";

else if(subject==="Social and Religious Studies")
file="lessons/P1/srs.js";

else if(subject==="Creative Arts")
file="lessons/P1/creativeArts.js";

else if(subject==="Physical Education and Sports")
file="lessons/P1/pes.js";

}


// S1
else if(level==="S1"){

if(subject==="Mathematics")
file="lessons/S1/mathematics.js";

else if(subject==="Physics")
file="lessons/S1/physics.js";

else if(subject==="Biology")
file="lessons/S1/biology.js";

else if(subject==="Chemistry")
file="lessons/S1/chemistry.js";

else if(subject==="English")
file="lessons/S1/english.js";

}


// S6
else if(level==="S6"){

if(subject==="ICT")
file="lessons/S6/ict.js";

else if(subject==="Entrepreneurship")
file="lessons/S6/entrepreneurship.js";

else if(subject==="Physics")
file="lessons/S6/physics.js";

}


// Nta file yabonetse
if(file===""){

document.getElementById("lessonsContainer")
.innerHTML=

"<h2>No Lessons Available</h2>";

return;

}


// Load lesson file
const script =
document.createElement("script");

script.src=file;


script.onload=function(){


const container=
document.getElementById(
"lessonsContainer"
);


const content=
document.getElementById(
"lessonContent"
);


container.innerHTML="";


lessons.forEach(l=>{


const div=
document.createElement("div");


div.className=
"lesson-card";


div.innerHTML=`

<div class="lesson-title">

${l.title}

</div>

`;


div.onclick=()=>{

content.innerHTML=

l.content;

};


container.appendChild(div);


});


};


document.body.appendChild(script);
