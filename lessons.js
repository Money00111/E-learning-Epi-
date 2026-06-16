const selectedSubject = localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText =
"📖 Lessons za " + selectedSubject;

const lessonsData = {
  "Math": [
    {
      title: "Lesson 1: Integers",
      video: "https://www.youtube.com/embed/8J7JYb2T6g8"
    },
    {
      title: "Lesson 2: Fractions",
      video: "https://www.youtube.com/embed/FezQF3T0x2M"
    }
  ],

  "English": [
    {
      title: "Lesson 1: Grammar",
      video: "https://www.youtube.com/embed/N4ZrD8w6tQ0"
    }
  ],

  "Biology": [
    {
      title: "Lesson 1: Cell Structure",
      video: "https://www.youtube.com/embed/gFuEoxh5hd4"
    }
  ]
};

const lessons = lessonsData[selectedSubject] || [];

const container = document.getElementById("lessonsContainer");

lessons.forEach(item => {

  const div = document.createElement("div");

  div.className = "card";

  div.innerText = item.title;

  div.onclick = () => {
    document.getElementById("lessonVideo").src = item.video;
  };

  container.appendChild(div);

  function startQuiz(){
  window.location.href = "quiz.html";
    }
});
