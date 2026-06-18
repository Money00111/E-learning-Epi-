const container =
document.getElementById("lessonsContainer");

const card =
document.createElement("div");

card.className = "lesson-card";

card.innerHTML = `
<h3>Lesson 1</h3>
`;

card.onclick = () => {

document.getElementById("lessonVideo").src =
"https://www.youtube.com/embed/ysz5S6PUM-U";

};

container.appendChild(card);


function goQuiz(){

alert("Quiz");

}
