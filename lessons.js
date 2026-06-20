const container =
document.getElementById("lessonsContainer");


questions.forEach((q,index)=>{

const div =
document.createElement("div");

div.className = "qa-card";


div.innerHTML = `

<h3>

Question ${index+1}

</h3>


<p>

${q.question}

</p>


<button class="show-btn">

Show Answer

</button>


<div class="answer">

${q.answer}

</div>

`;


const btn =
div.querySelector(".show-btn");

const ans =
div.querySelector(".answer");


ans.style.display="none";


btn.onclick=()=>{

if(ans.style.display=="none"){

ans.style.display="block";

btn.innerText=
"Hide Answer";

}
else{

ans.style.display="none";

btn.innerText=
"Show Answer";

}

};


container.appendChild(div);


});
