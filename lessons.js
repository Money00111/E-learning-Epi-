import { db } from "./firebase.js";

import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const subject = localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText =
"📖 " + subject;

const container = document.getElementById("lessonsContainer");

// 🔥 READ FIREBASE
onValue(ref(db, "lessons"), (snapshot) => {

  container.innerHTML = "";

  const data = snapshot.val();

  if (!data) {
    container.innerHTML = "<p>No lessons found</p>";
    return;
  }

  Object.values(data).forEach((lesson) => {

    // 🔥 FILTER SUBJECT
    if (lesson.subject !== subject) return;

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

      // 🔥 SAFE VIDEO LOAD
      document.getElementById("lessonVideo").src =
        lesson.video || "";

      localStorage.setItem(
        "currentLesson",
        JSON.stringify(lesson)
      );

    };

    container.appendChild(card);
  });

});
