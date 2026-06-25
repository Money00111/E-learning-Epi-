let current=0;

let score=0;



showQuestion();



function showQuestion(){


const q=window.quizQuestions[current];



document.getElementById(

"quizContent"

).innerHTML=`


<div class="lesson-card">


<img

src="${q.image}"

class="lesson-image"

>



<h2>

${q.question}

</h2>



<div id="options">

</div>



<p id="feedback"></p>



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

`;



const opt=

document.getElementById(

"options"

);



q.options.forEach(

(o,i)=>{


opt.innerHTML+=`

<button

onclick="checkAnswer(${i})"

>

${String.fromCharCode(65+i)}

.

${o}

</button>

<br>

<br>

`;


});


}



function checkAnswer(i){


const q=

quizQuestions[current];



const feed=

document.getElementById(

"feedback"

);



if(

i===q.answer

){


score++;


feed.innerHTML=

"✅ Correct";


}


else{


feed.innerHTML=

"❌ Wrong";


}



document.getElementById(

"score"

).innerHTML=


"🏆 Score "

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


document.getElementById(

"quizContent"

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



}



function previousQuestion(){


if(current>0){

current--;

showQuestion();

}


  }
