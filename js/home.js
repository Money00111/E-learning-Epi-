const content = document.getElementById("lessonBox");

let lessons = [];
let current = 0;

const subject = localStorage.getItem("subject");

const files = {

signs:"data/signs.js",

lights:"data/lights.js",

warnings:"data/warnings.js",

driving:"data/driving.js"

};


const file = files[subject];


if(!file){

content.innerHTML="<h2>No lessons available</h2>";

}


else{


const script=document.createElement("script");


script.src=file;



script.onload=()=>{


lessons=window.lessons;


showLesson();


updateProgress();


};


document.body.appendChild(script);


}



function showLesson(){


const l=lessons[current];



content.innerHTML=`


<div class="lesson-card">


<img src="${l.image}"

class="lesson-image">



<h2>

${l.title}

</h2>



<p>

${l.text}

</p>



<button onclick="toggleAnswer()">

Show Answer

</button>



<div id="answer">

${l.answer}

</div>



</div>


`;



document.getElementById(

"answer"

).style.display="none";


}



function toggleAnswer(){


const a=document.getElementById(

"answer"

);



a.style.display=

a.style.display==="none"

?

"block"

:

"none";


}



function nextLesson(){


if(current<lessons.length-1){


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
