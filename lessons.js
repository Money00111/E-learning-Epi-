const subject = localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText =
"📖 " + subject;

// PRO LESSON DATA
const lessonsData = {
  "Math": [
    {
      title: "Integers Basics",
      level: "Beginner",
      time: "15 min",
      video: "https://www.youtube.com/embed/8J7JYb2T6g8"
    },
    {
      title: "Fractions",
      level: "Intermediate",
      time: "20 min",
      video: "https://www.youtube.com/embed/FezQF3T0x2M"
    }
  ],

  "English": [
    {
      title: "Tenses",
      level: "Beginner",
      time: "18 min",
      video: "https://www.youtube.com/embed/N4ZrD8w6tQ0"
    }
  ],

  "Biology": [
    {
      title: "Cell Structure",
      level: "Beginner",
      time: "22 min",
      video: "https://www.youtube.com/embed/gFuEoxh5hd4"
    }
  ]
};

const lessons = lessonsData[subject] || [];

const container = document.getElementById("lessonsContainer");

lessons.forEach(l => {

  const div = document.createElement("div");
  div.className = "lesson-card";

  div.innerHTML = `
<div class="lesson-thumb">▶</div>

<div class="lesson-content">
  <div class="lesson-title">${l.title}</div>
  <div class="lesson-meta">
    ⏱ ${l.time} • 📖 ${l.level}
  </div>
</div>

<button class="play-btn">Play Video</button>
`;

  div.onclick = () => {
    document.getElementById("lessonVideo").src = l.video;
  };

  container.appendChild(div);
});

function goQuiz() {
  window.location.href = "quiz.html";
      }
