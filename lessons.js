const subject = localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText =
"📖 Lessons za " + subject;

// Lessons nyinshi (PRO structure)
const lessonsData = {
  "Math": [
    {
      title: "Lesson 1: Integers",
      video: "https://www.youtube.com/embed/8J7JYb2T6g8"
    },
    {
      title: "Lesson 2: Fractions",
      video: "https://www.youtube.com/embed/FezQF3T0x2M"
    },
    {
      title: "Lesson 3: Algebra Basics",
      video: "https://www.youtube.com/embed/5b7XgGg0x1A"
    }
  ],

  "English": [
    {
      title: "Lesson 1: Tenses",
      video: "https://www.youtube.com/embed/N4ZrD8w6tQ0"
    },
    {
      title: "Lesson 2: Grammar",
      video: "https://www.youtube.com/embed/1Y0cG9d5xZQ"
    }
  ],

  "Biology": [
    {
      title: "Lesson 1: Cell Structure",
      video: "https://www.youtube.com/embed/gFuEoxh5hd4"
    },
    {
      title: "Lesson 2: Human Body",
      video: "https://www.youtube.com/embed/2XGx0b9kQp0"
    }
  ]
};

const lessons = lessonsData[subject] || [];

const container = document.getElementById("lessonsContainer");

lessons.forEach((l) => {

  const div = document.createElement("div");
  div.className = "card";
  div.innerText = l.title;

  div.onclick = () => {
    // 🔥 show video
    document.getElementById("lessonVideo").src = l.video;
  };

  container.appendChild(div);
});

// Quiz navigation
function goQuiz(){
  window.location.href = "quiz.html";
  }
