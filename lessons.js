const container = document.getElementById("lessonsContainer");

let current = 0;
let score = 0;


// ===== START =====

if (window.lessons) {

    function showLessons(){

container.innerHTML="";


window.lessons.forEach((lesson)=>{


container.innerHTML += `


<div class="lesson-card">


<img

src="${lesson.image}"

class="lesson-image"

>



<h2>

${lesson.title}

</h2>



<p>

${lesson.text}

</p>



<button class="show-btn">

Show Answer

</button>



<div

class="answer"

style="display:none"

>

${lesson.answer}

</div>



</div>

`;


});



document.querySelectorAll(

".show-btn"

)

.forEach(btn=>{


btn.onclick=function(){


const ans=

this.nextElementSibling;



if(

ans.style.display==="none"

){


ans.style.display=

"block";


this.innerText=

"Hide Answer";


}


else{


ans.style.display=

"none";


this.innerText=

"Show Answer";


}


};


});


}
    showQuestion();

}

else{

container.innerHTML="<h2>No lessons available</h2>";

}



// ===== LESSONS =====

function showLessons(){

container.innerHTML="";


window.lessons.forEach((lesson)=>{


container.innerHTML += `

<div class="qa-card">


<img src="${lesson.image}"

class="lesson-image">



<h3>

${lesson.title}

</h3>



<p>

${lesson.text}

</p>



<button class="show-btn">

Show Answer

</button>



<div class="answer"

style="display:none;">

${lesson.answer}

</div>



</div>

`;


});



document.querySelectorAll(

".show-btn"

)

.forEach(btn=>{


btn.onclick=function(){


const ans=

this.nextElementSibling;



if(

ans.style.display===

"none"

){


ans.style.display=

"block";


this.innerText=

"Hide Answer";


}


else{


ans.style.display=

"none";


this.innerText=

"Show Answer";


}



};


});



}



// ===== QUIZ =====


function showQuestion(){


if(

!window.quizQuestions

){

return;

}



const q=

quizQuestions[current];



container.innerHTML=`


<div class="quiz-card">


<img

src="${q.image}"

class="quiz-image"

>



<h2>

${q.question}

</h2>



<div id="options">

</div>



<div

id="feed"

class="feedback"

style="display:none;"

>

</div>



<div class="nav-buttons">


<button

onclick="previousQuestion()"

>

⬅ Previous

</button>



<button

onclick="nextQuestion()"

>

Next ➡

</button>


</div>



</div>

`;



const opt=

document.getElementById(

"options"

);



q.options.forEach(

(option,index)=>{


opt.innerHTML+=`

<div

class="option"

onclick="checkAnswer(${index})"

>


${String.fromCharCode(

65+index

)}

&nbsp;


${option}


</div>

`;


});


}




function checkAnswer(i){


const q=

quizQuestions[current];



const options=

document.querySelectorAll(

".option"

);



options.forEach(

o=>o.style.pointerEvents=

"none"

);



const feed=

document.getElementById(

"feed"

);



if(

i===q.answer

){


options[i]

.classList.add(

"correct"

);



score++;



feed.className=

"feedback correct";



feed.innerHTML=`


✅ Ni ukuri


<br>


${q.options[q.answer]}


`;


}


else{


options[i]

.classList.add(

"wrong"

);



options[q.answer]

.classList.add(

"correct"

);



feed.className=

"feedback wrong";



feed.innerHTML=`


❌ Oya


<br>


Igisubizo ni:


${q.options[q.answer]}


`;


}



feed.style.display=

"block";



document.getElementById(

"subjectTitle"

).innerHTML=


"🏆 Score : "

+

score

+

"/"

+

quizQuestions.length;



}




function nextQuestion(){


current++;



if(

current<

quizQuestions.length

){

showQuestion();

}


else{


container.innerHTML=`


<h1>

🎉 Quiz Yarangiye

</h1>



<h2>

Score

${score}

/

${quizQuestions.length}

</h2>


`;


}



}



function previousQuestion(){


if(

current>0

){


current--;


showQuestion();


}



    }
