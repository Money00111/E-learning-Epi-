import { db } from "./firebase.js";

import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

// 👉 subject iva muri subjects page
const subject = localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText =
"📖 " + (subject || "All Lessons");

const container = document.getElementById("lessonsContainer");

onValue(ref(db, "lessons"), (snapshot) => {

  container.innerHTML = "";

  const data = snapshot.val();

  if (!data) {
    container.innerHTML = "<h3>No lessons found</h3>";
    return;
  }

  Object.values(data).forEach((lesson) => {

    // 👉 SAFE CHECK
    if (subject && lesson.subject !== subject) return;

    const card = document.createElement("div");
    card.className = "lesson-card";

    card.innerHTML = `
      <div class="lesson-thumb">▶</div>

      <div class="lesson-content">
        <div class="lesson-title">
          ${lesson.title || "No title"}
        </div>

        <div class="lesson-meta">
          📚 ${lesson.topic || "No topic"}
        </div>
      </div>

      <button class="play-btn">Play</button>
    `;

    card.onclick = () => {

      if (lesson.video) {
        document.getElementById("lessonVideo").src =
          lesson.video;
      } else {
        alert("No video found");
      }

      localStorage.setItem(
        "currentLesson",
        JSON.stringify(lesson)
      );

    };

    container.appendChild(card);
  });

});
