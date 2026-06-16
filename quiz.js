const subject = localStorage.getItem("subject");

const quizzes = {

  "Math": [
    {
      question: "2 + 2 = ?",
      options: ["3","4","5","6"],
      answer: "4"
    },
    {
      question: "10 ÷ 2 = ?",
      options: ["2","3","5","6"],
      answer: "5"
    }
  ],

  "Physics": [
    {
      question: "Unit of Force?",
      options: ["Newton","Meter","Second","Kg"],
      answer: "Newton"
    },
    {
      question: "Voltage is measured in?",
      options: ["Ampere","Volt","Watt","Ohm"],
      answer: "Volt"
    }
  ],

  "Biology": [
    {
      question: "Basic unit of life?",
      options: ["Cell","Blood","Heart","Leaf"],
      answer: "Cell"
    },
    {
      question: "Human has how many lungs?",
      options: ["1","2","3","4"],
      answer: "2"
    }
  ]

};

const questions = quizzes[subject] || [];
const container = document.getElementById("quizContainer");

questions.forEach((q,index)=>{

  const div = document.createElement("div");

  div.className = "lesson-card";

  div.innerHTML = `
    <h3>${q.question}</h3>

    ${q.options.map(option => `
      <label>
        <input type="radio"
        name="q${index}"
        value="${option}">
        ${option}
      </label><br><br>
    `).join("")}
  `;

  container.appendChild(div);

});

document.getElementById("submitBtn").onclick = ()=>{

  let score = 0;

  questions.forEach((q,index)=>{

    const selected =
      document.querySelector(
        `input[name="q${index}"]:checked`
      );

    if(
      selected &&
      selected.value === q.answer
    ){
      score++;
    }

  });

  localStorage.setItem(
    "score",
    `${score}/${questions.length}`
  );

  window.location.href =
    "certificate.html";

};
