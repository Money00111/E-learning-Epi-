// Dufata level yatoranyijwe
const selectedLevel = localStorage.getItem("level");

// Dushyira title
document.getElementById("levelTitle").innerText =
  `📚 Amasomo ya ${selectedLevel}`;

// Data y'amasomo kuri buri level
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

// Fata amasomo ya level
const subjects = data[selectedLevel] || [];

const container = document.getElementById("subjectsContainer");

// Erekana amasomo
subjects.forEach(sub => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerText = sub;

  div.onclick = () => {
    alert("Wahisemo: " + sub);
    // nyuma tuzashyiramo lessons + payment
  };

  container.appendChild(div);
});
