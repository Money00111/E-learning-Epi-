const level = localStorage.getItem("level");

document.title = level + " Subjects";

const subjectsData = {

"Primary 1": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Science and Elementary Technology",
    "Social and Religious Studies",
    "Creative Arts",
    "Physical Education and Sports"
],

"Primary 2": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Science and Elementary Technology",
    "Social and Religious Studies",
    "Creative Arts",
    "Physical Education and Sports"
],

"Primary 3": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Science and Elementary Technology",
    "Social and Religious Studies",
    "Creative Arts",
    "Physical Education and Sports"
],

"Primary 4": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Science and Elementary Technology",
    "Social and Religious Studies",
    "Creative Arts",
    "Physical Education and Sports"
],

"Primary 5": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Science and Elementary Technology",
    "Social and Religious Studies",
    "Creative Arts",
    "Physical Education and Sports"
],

"Primary 6": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Science and Elementary Technology",
    "Social and Religious Studies",
    "Creative Arts",
    "Physical Education and Sports"
],

"Secondary 1": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Entrepreneurship",
    "ICT"
],

"Secondary 2": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Entrepreneurship",
    "ICT"
],

"Secondary 3": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Entrepreneurship",
    "ICT"
],

"Secondary 4": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Entrepreneurship",
    "ICT"
],

"Secondary 5": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Entrepreneurship",
    "ICT"
],

"Secondary 6": [
    "Mathematics",
    "English",
    "Kinyarwanda",
    "Biology",
    "Chemistry",
    "Physics",
    "Geography",
    "History",
    "Entrepreneurship",
    "ICT"
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
