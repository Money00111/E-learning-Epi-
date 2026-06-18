const lesson=

JSON.parse(

localStorage.getItem(

"lesson"

)

);



document.getElementById(

"title"

).innerText=

lesson.title;



document.getElementById(

"content"

).innerHTML=`

<p>

${lesson.content}

</p>

`;
