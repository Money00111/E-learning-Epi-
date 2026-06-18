const subject=

localStorage.getItem(

"subject"

);


document.getElementById(

"subjectTitle"

).innerText=

subject;



let lessons=

JSON.parse(

localStorage.getItem(

"lessons"

)

)||[];



const container=

document.getElementById(

"lessonsContainer"

);



lessons.forEach(l=>{


if(

l.subject!=subject

)

return;



const div=

document.createElement(

"div"

);


div.className=

"lesson-card";



div.innerHTML=`


<div class="lesson-title">

${l.title}

</div>


<div class="lesson-meta">

📖 Notes Lesson

</div>


`;



div.onclick=()=>{


localStorage.setItem(

"lesson",

JSON.stringify(

l

)

);


window.location.href=

"lesson-content.html";


};



container.appendChild(

div

);



});
