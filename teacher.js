window.saveLesson=function(){


const lesson={

level:

document.getElementById("level").value,

subject:

document.getElementById("subject").value,

title:

document.getElementById("title").value,

content:

document.getElementById("content").value


};



let lessons=

JSON.parse(

localStorage.getItem(

"lessons"

)

)||[];



lessons.push(

lesson

);



localStorage.setItem(

"lessons",

JSON.stringify(

lessons

)

);



alert(

"Lesson Saved"

);



};
