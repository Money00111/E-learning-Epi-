// Fata subject yatoranyijwe
const selectedSubject = localStorage.getItem("subject");

document.getElementById("subjectTitle").innerText =
  "📖 Lessons za " + selectedSubject;

// Data ya lessons
const lessonsData = {
  "Math": [
    "Lesson 1: Integers",
    "Lesson 2: Fractions",
    "Lesson 3: Algebra"
  ],

  "English": [
    "Lesson 1: Tenses",
    "Lesson 2: Grammar Basics",
    "Lesson 3: Writing"
  ],

  "Biology": [
    "Lesson 1: Cell Structure",
    "Lesson 2: Human Body",
    "Lesson 3: Plants"
  ]
};

// Fata lessons za subject
const lessons = lessonsData[selectedSubject] || [];

const container = document.getElementById("lessonsContainer");

lessons.forEach(lesson => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerText = lesson;

  div.onclick = () => {
    alert("Ufunguye: " + lesson);
  };

  container.appendChild(div);
});
