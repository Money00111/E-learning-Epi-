const selectedLevel = localStorage.getItem("level");

// niba level itabitswe
if (!selectedLevel) {
  alert("Nta level wahisemo. Subira kuri Levels page.");
  window.location.href = "levels.html";
}

document.getElementById("levelTitle").innerText =
  "📚 Amasomo ya " + selectedLevel;

const data = {
  "Primary 1": ["Kinyarwanda", "Math", "English"],
  "Primary 2": ["Kinyarwanda", "Math", "English"],
  "Primary 3": ["Kinyarwanda", "Math", "English", "Science"],

  "S1": ["Math", "English", "Biology", "Chemistry", "Physics"],
  "S2": ["Math", "English", "Biology", "Chemistry", "Physics"],
  "S3": ["Math", "English", "Biology", "Chemistry", "Physics"],
  "S4": ["Math", "English", "Biology", "Chemistry", "Physics"],
  "S5": ["Math", "English", "Biology", "Chemistry", "Physics"],
  "S6": ["Math", "English", "Biology", "Chemistry", "Physics"],

  "Year 1": ["Programming", "Math", "Communication"],
  "Year 2": ["Advanced Programming", "Database", "Networking"],
  "Year 3": ["Final Project", "AI Basics", "Security"]
};

const subjects = data[selectedLevel] || [];

const container = document.getElementById("subjectsContainer");

subjects.forEach(sub => {

  const div = document.createElement("div");
  div.className = "card";
  div.innerText = sub;

  div.onclick = () => {

    // 🔥 Bika subject
    localStorage.setItem("subject", sub);
function openSubject(sub) {
  localStorage.setItem("subject", sub);
  window.location.href = "lessons.html";
}
    // 🔥 Jya kuri lessons page
    window.location.href = "lessons.html";
  };

  container.appendChild(div);
});
