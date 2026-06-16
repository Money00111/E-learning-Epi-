function saveLesson() {

  const lesson = {
    level: document.getElementById("level").value,
    subject: document.getElementById("subject").value,
    topic: document.getElementById("topic").value,
    title: document.getElementById("lessonTitle").value,
    video: document.getElementById("videoLink").value
  };

  let lessons =
    JSON.parse(localStorage.getItem("lessons")) || [];

  lessons.push(lesson);

  localStorage.setItem(
    "lessons",
    JSON.stringify(lessons)
  );

  alert("Lesson Saved Successfully!");
}
