let current = 0;

let score = 0;



function loadQuestion(){


const q = questions[current];


document.getElementById(

"question"

).innerText = q.question;



document.getElementById(

"counter"

).innerText =

(current+1)

+

" / "

+

questions.length;



document.getElementById(

"sign"

).src = q.image;



const box =

document.getElementById(

"answers"

);


box.innerHTML = "";



q.options.forEach(

(opt,i)=>{


const btn=

document.createElement(

"button"

);


btn.className=

"answer-btn";


btn.innerText=

opt;



btn.onclick=()=>{


if(

i===q.answer

){

btn.classList.add(

"correct"

);


score++;


}


else{


btn.classList.add(

"wrong"

);


}


};


box.appendChild(

btn

);


});


}



document.getElementById(

"next"

).onclick=()=>{


current++;


if(

current<questions.length

){

loadQuestion();

}


else{


localStorage.setItem(

"score",

score

);


window.location=

"result.html";


}


};



loadQuestion();
