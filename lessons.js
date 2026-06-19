const data = JSON.parse(localStorage.getItem("lessonsDB")) || {};

// Example: Primary 1 Mathematics
const lessons = data["Primary 1"]?.["Mathematics"] || [];

const container = document.getElementById("lessonsContainer");
const allLevels = {
  "Primary 1": lessonP1,
  "Primary 2": lessonP2,
  "Primary 3": lessonP3
};

const container = document.getElementById("lessonsContainer");

for (let level in allLevels) {
  const levelDiv = document.createElement("div");

  levelDiv.innerHTML = `<h1>📘 ${level}</h1>`;

  const subjects = allLevels[level];

  for (let subject in subjects) {
    levelDiv.innerHTML += `<h2>📚 ${subject}</h2>`;

    subjects[subject].forEach((lesson, index) => {
      levelDiv.innerHTML += `
        <h3>${lesson.title}</h3>
        <button onclick="openLesson('${level}','${subject}',${index})">
          📖 Open
        </button>
        <hr>
      `;
    });
  }

  container.appendChild(levelDiv);
}

function openLesson(level, subject, index) {
  const lesson = allLevels[level][subject][index];

  localStorage.setItem("lesson", JSON.stringify(lesson));

  window.location.href = "lesson.html";
  }
// niba nta lessons
if (lessons.length === 0) {
  container.innerHTML = `
    <p>No lessons available</p>
  `;
} else {
  lessons.forEach((lesson, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${lesson.title}</h3>
      <p>${lesson.content}</p>
      <button onclick="goQuiz(${index})">📝 Take Quiz</button>
      <hr>
    `;

    container.appendChild(div);
  });
}

// Quiz function
function goQuiz(index) {
  alert("Quiz for lesson " + index);
}
