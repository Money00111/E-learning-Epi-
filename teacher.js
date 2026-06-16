import { db } from "./firebase.js";

import {
  ref,
  push
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

window.saveLesson = function() {

  const lesson = {
    level: document.getElementById("level").value,
    subject: document.getElementById("subject").value,
    topic: document.getElementById("topic").value,
    title: document.getElementById("lessonTitle").value,
    video: document.getElementById("videoLink").value,
    createdAt: Date.now()
  };

  push(ref(db, "lessons"), lesson)
    .then(() => {
      alert("✅ Lesson Saved!");

      document.getElementById("subject").value = "";
      document.getElementById("topic").value = "";
      document.getElementById("lessonTitle").value = "";
      document.getElementById("videoLink").value = "";
    })
    .catch((error) => {
      alert("❌ Error: " + error.message);
    });
    }
