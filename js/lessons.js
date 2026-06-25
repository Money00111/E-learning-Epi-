const content=document.getElementById("lessonBox");

let lessons=[];

let current=0;

const script=document.createElement("script");

script.src="data/signs.js";

script.onload=()=>{

lessons=window.lessons;

showLesson();

updateProgress();

};

document.body.appendChild(script);



function showLesson(){

const l=lessons[current];

content.innerHTML=`

<div class="lesson-card">


<img src="${l.image}"

class="lesson-image">


<h2>${l.title}</h2>


<p>${l.text}</p>


<button onclick="toggleAnswer()">

Show Answer

</button>



<div id="answer"

style="display:none;">


${l.answer}


</div>


</div>

`;

}



function toggleAnswer(){

const a=document.getElementById("answer");

a.style.display=

a.style.display==="none"

?

"block"

:

"none";

}



function nextLesson(){

if(

current<lessons.length-1

){

current++;

showLesson();

updateProgress();

}

}



function previousLesson(){

if(current>0){

current--;

showLesson();

updateProgress();

}

}



function updateProgress(){

let p=Math.round(

((current+1)

/lessons.length)

*100

);



document.getElementById(

"bar"

).style.width=

p+"%";



document.getElementById(

"percent"

).innerHTML=

p+"%";

}
