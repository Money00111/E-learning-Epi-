console.log(subject);
const subject =
localStorage.getItem("subject");


document.getElementById(
"subjectTitle"
).innerText =
"📖 " + subject;



const lessonsData = {

"Mathematics":[

{
  title:"Lesson 1",video:"https://www.youtube.com/embed/ysz5S6PUM-U"

},

{

title:"Lesson 2",video:"https://www.youtube.com/embed/dQw4w9WgXcQ"

},

{

title:"Lesson 3",video:"https://www.youtube.com/embed/jNQXAC9IVRw"

}

],


"Physics":[

{

title:"Lesson 1",video:"https://www.youtube.com/embed/ysz5S6PUM-U"

},

{

title:"Lesson 2",video:"https://www.youtube.com/embed/dQw4w9WgXcQ"

}

],



"English":[

{

title:"Lesson 1",video:"https://www.youtube.com/embed/ysz5S6PUM-U"

}

]

};



const lessons =

lessonsData[subject] || [];



const container =

document.getElementById(

"lessonsContainer"

);



lessons.forEach(lesson=>{


const card =

document.createElement(

"div"

);



card.className =

"lesson-card";



card.innerHTML = `


<div class="lesson-thumb">

▶

</div>



<div class="lesson-content">

<div class="lesson-title">

${lesson.title}

</div>


<div class="lesson-meta">

🎥 Video Lesson

</div>


</div>



<button class="play-btn">

Play

</button>

`;



card.onclick = ()=>{


document.getElementById(

"lessonVideo"

).src = lesson.video;


};



container.appendChild(

card

);


});



function goQuiz(){

alert(

"Quiz tuzayikora nyuma"

);

  }
