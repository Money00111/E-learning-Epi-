const lesson = JSON.parse(localStorage.getItem("lesson")) || {
  title: "No lesson selected",
  content: "Hitamo isomo mbere."
};

document.getElementById("title").innerText = lesson.title;

document.getElementById("content").innerHTML = `
  <p>${lesson.content}</p>
`;
