import { db } from "./firebase.js";

import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const subject =
  localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText =
  "📖 " + subject;

const container =
  document.getElementById("lessonsContainer");

onValue(ref(db, "lessons"), (snapshot) => {

  container.innerHTML = "";

  if (!snapshot.exists()) return;

  const data = snapshot.val();

  Object.keys(data).forEach((key) => {

    const lesson = data[key];

    if (lesson.subject !== subject) return;

    const card =
      document.createElement("div");

    card.className = "lesson-card";

    card.onclick = () => {

  document.getElementById("lessonVideo").src =
    lesson.video || "";

};
    card.innerHTML = `
      <div class="lesson-thumb">▶</div>

      <div class="lesson-content">
        <div class="lesson-title">
          ${lesson.title}
        </div>

        <div class="lesson-meta">
          📚 ${lesson.topic}
        </div>
      </div>

      <button class="play-btn">
        Play
      </button>
    `;

    card.onclick = () => {

      document.getElementById(
        "lessonVideo"
      ).src = lesson.video;

      localStorage.setItem(
        "currentLesson",
        JSON.stringify(lesson)
      );

    };

    container.appendChild(card);

  });

});

window.goQuiz = function () {

  const lesson =
    localStorage.getItem("currentLesson");

  if (!lesson) {
    alert("Banza uhitemo Lesson.");
    return;
  }

  window.location.href =
    "quiz.html";
};
