const container =
document.getElementById(
"lessonsContainer"
);


if(
!window.questions
){

container.innerHTML=`

<h2>

No lessons found

</h2>

`;

}


else{


window.questions.forEach(

(q,index)=>{

const div=

document.createElement(

"div"

);


div.className=

"qa-card";


div.innerHTML=`

<h3>

${q.question}

</h3>


<button class="show-btn">

Show Answer

</button>


<div class="answer">

${q.answer}

</div>

`;


const btn=

div.querySelector(

".show-btn"

);


const ans=

div.querySelector(

".answer"

);


ans.style.display=

"none";


btn.onclick=()=>{


if(

ans.style.display==

"none"

){

ans.style.display=

"block";


btn.innerText=

"Hide Answer";

}


else{


ans.style.display=

"none";


btn.innerText=

"Show Answer";


}


};


container.appendChild(

div

);


});

  }
