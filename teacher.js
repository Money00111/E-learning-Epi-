import { db } from "./firebase.js";

import {
  ref,
  push
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

window.saveLesson = function () {

  const level = document.getElementById("level").value;
  const subject = document.getElementById("subject").value;
  const topic = document.getElementById("topic").value;
  const title = document.getElementById("lessonTitle").value;
  const video = document.getElementById("videoLink").value;

  // ❗ CHECK niba hari empty
  if (!subject || !topic || !title || !video) {
    alert("❌ Uzuza byose mbere yo kubika");
    return;
  }

  const lesson = {
    level,
    subject,
    topic,
    title,
    video,
    createdAt: Date.now()
  };

  push(ref(db, "lessons"), lesson)
    .then(() => {
      alert("✅ Lesson Saved!");
    })
    .catch((e) => {
      alert("❌ Error: " + e.message);
    });
};
