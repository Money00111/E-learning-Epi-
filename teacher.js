import { db } from "./firebase.js";

import {
ref,
push
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";


window.saveLesson = function(){

const level =
document.getElementById("level").value;

const subject =
document.getElementById("subject").value;

const title =
document.getElementById("title").value;

const notes =
document.getElementById("notes").value;


const lesson = {

title:title,

notes:notes

};


push(

ref(db,

`lessons/${level}/${subject}`)

,

lesson

)

.then(()=>{

alert("✅ Lesson Saved");

})

.catch(err=>{

alert("❌ "+err.message);

});

}
