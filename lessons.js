const lessons = [
  { title: "Lesson 1", video: "https://www.youtube.com/embed/8J7JYb2T6g8" },
  { title: "Lesson 2", video: "https://www.youtube.com/embed/FezQF3T0x2M" }
];

const container = document.getElementById("lessonsContainer");

lessons.forEach(l => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerText = l.title;

  div.onclick = () => {
    alert("Ukanze: " + l.title);
  };

  container.appendChild(div);
});
