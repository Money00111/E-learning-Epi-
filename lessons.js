
let current=0;

let score=0;
if (window.lessons) {
    showLessons();
}
else if (window.quizQuestions) {
    showQuestion();
}
showQuestion();



function showQuestion(){


const q=quizQuestions[current];


container.innerHTML=`

<div class="quiz-card">


<img src="${q.image}"

class="quiz-image">



<h2>

${q.question}

</h2>



<div id="options">

</div>



<div id="feed"

class="feedback">

</div>



<button onclick="nextQuestion()">

Next Question

</button>



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


${String.fromCharCode(65+index)}

&nbsp;&nbsp;


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



if(i===q.answer){


options[i].classList.add(

"correct"

);


score++;



feed.className=

"feedback correct";


feed.innerHTML=`

✅ Ni ukuri!

<br>

${q.options[q.answer]}

`;



}


else{


options[i].classList.add(

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

+score+

"/"+

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

Quiz Yarangiye

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
