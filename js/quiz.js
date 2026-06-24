
let current=0;

let score=0;



showQuestion();



function showQuestion(){



const q=

quizQuestions[current];



document.getElementById(

"quiz"

).innerHTML=`



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



<div id="feedback">

</div>



<button onclick="previousQuestion()">

⬅ Previous

</button>



<button onclick="nextQuestion()">

Next ➡

</button>



</div>



`;



const opt=

document.getElementById(

"options"

);



q.options.forEach(

(o,i)=>{


opt.innerHTML+=`


<div

class="option"

onclick="check(${i})"

>


${String.fromCharCode(

65+i

)}


.


${o}


</div>


`;



});



updateBar();



}



function check(i){


const q=

quizQuestions[current];



const all=

document.querySelectorAll(

".option"

);



all.forEach(

x=>x.style.pointerEvents=

"none"

);



if(

i===q.answer

){


all[i]

.classList.add(

"correct"

);



score++;


}


else{


all[i]

.classList.add(

"wrong"

);



all[q.answer]

.classList.add(

"correct"

);


}



document.getElementById(

"score"

).innerHTML=


"Score "

+

score

+

"/"

+

quizQuestions.length;



}



function nextQuestion(){



if(

current<

quizQuestions.length-1

){


current++;


showQuestion();


}


else{


function finishQuiz(){

let status =

score>=Math.ceil(

quizQuestions.length*0.7

)

?

"PASS"

:

"FAIL";


localStorage.setItem(

"score",

score

);


container.innerHTML=`


<div class="certificate">


<h1>

🏆 Certificate

</h1>



<h2>

${status}

</h2>



<p>

Score

${score}


/

${quizQuestions.length}

</p>



</div>


`;

}



function previousQuestion(){



if(

current>0

){


current--;


showQuestion();


}



}



function updateBar(){



let p=

(

(current+1)

/

quizQuestions.length

)

*100;



document.getElementById(

"quizBar"

).style.width=


p+"%";



}



function finishQuiz(){



document.getElementById(

"quiz"

).innerHTML=`


<h1>

🎉 Quiz Yarangiye

</h1>



<h2>

${score}

/

${quizQuestions.length}

</h2>



`;



  }
  
