const lessons = {
  "Primary 1": {
    "Mathematics": [
      { title: "Numbers 1–10", content: "Twigira imibare kuva 1 kugeza 10." },
      { title: "Addition", content: "Kongeraho imibare mito." }
    ],
    "English": [
      { title: "Alphabet A–Z", content: "Inyuguti z'Icyongereza." }
    ]
  },

  "Primary 2": {
    "Mathematics": [
      { title: "Numbers 1–100", content: "Imibare 1 kugeza 100." }
    ]
  },

  "Primary 3": {
    "Mathematics": [
      { title: "Multiplication", content: "Gukuba imibare." }
    ]
  },

  "Primary 4": {
    "Mathematics": [
      { title: "Fractions", content: "Ibice by'imibare." }
    ]
  },

  "Primary 5": {
    "Mathematics": [
      { title: "Decimals", content: "Imibare icagaguye." }
    ]
  },

  "Primary 6": {
    "Mathematics": [
      { title: "Revision", content: "Isubiramo ry'ibyo wize." }
    ]
  },

  "Secondary 1": {
    "Mathematics": [
      { title: "Algebra basics", content: "Intangiriro ya algebra." }
    ],
    "Physics": [
      { title: "Motion", content: "Kwimuka kw'ibintu." }
    ]
  }function openLesson(level, subject, index) {
  const lesson = lessons[level][subject][index];

  localStorage.setItem("lesson", JSON.stringify(lesson));

  window.location.href = "lesson.html";
      }
const lesson = JSON.parse(localStorage.getItem("lesson")) || {
  title: "No lesson selected",
  content: "Hitamo isomo mbere."
};

document.getElementById("title").innerText = lesson.title;

document.getElementById("content").innerHTML = `
  <p>${lesson.content}</p>
`;

};

