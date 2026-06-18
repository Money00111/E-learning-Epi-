const level = localStorage.getItem("level");

document.title = level + " Subjects";

const subjectsData = {

  "S1": [
    "Mathematics",
    "English",
    "Biology",
    "Chemistry",
    "Physics"
  ],

  "S2": [
    "Mathematics",
    "English",
    "Biology",
    "Chemistry",
    "Physics"
  ],

  "Primary 1": [
    "Math",
    "English",
    "Kinyarwanda"
  ],

  "Primary 2": [
    "Math",
    "English",
    "Kinyarwanda"
  ]

};

const subjects = subjectsData[level] || [];

const container = document.getElementById("subjectsContainer");

container.innerHTML = "";

if (subjects.length === 0) {

  container.innerHTML = `
  <h3>No subjects found</h3>
  `;

}

subjects.forEach(subject => {

  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
    <h3>${subject}</h3>
  `;

  card.onclick = () => {

    localStorage.setItem("subject", subject);

    window.location.href = "lessons.html";

  };

  container.appendChild(card);

});
