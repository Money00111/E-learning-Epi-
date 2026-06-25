const subject = localStorage.getItem("subject");

if(subject==="signs"){
    const script=document.createElement("script");
    script.src="data/signs.js";
    document.body.appendChild(script);

    script.onload=()=>{
        show();
    };
}

else if(subject==="lights"){
    const script=document.createElement("script");
    script.src="data/lights.js";
    document.body.appendChild(script);

    script.onload=()=>{
        show();
    };
      }

const subject = localStorage.getItem("subject");

if(!subject){
document.getElementById("content").innerHTML =
"<h2>No subject selected</h2>";
}
const content=

document.getElementById(

"content"

);


let current=0;



function showLesson(){


const l=

window.lessons[current];



content.innerHTML=`


<div class="lesson-card">


<img

src="${l.image}"

class="lesson-image"

>



<h2>

${l.title}

</h2>



<p>

${l.text}

</p>



<button id="show">

Show Answer

</button>



<div

id="answer"

style="display:none;"

>


${l.answer}


</div>



</div>

`;



document.getElementById(

"show"

).onclick=()=>{


const a=

document.getElementById(

"answer"

);



if(

a.style.display===

"none"

){


a.style.display=

"block";


}


else{


a.style.display=

"none";


}



};



updateProgress();



}



function updateProgress(){


let p=

Math.round(

(

(current+1)

/


lessons.length

)

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



function nextLesson(){


if(

current<

lessons.length-1

){


current++;


showLesson();


}



}



function previousLesson(){


if(

current>0

){


current--;


showLesson();


}



}



showLesson();
