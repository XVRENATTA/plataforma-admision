
// ===============================
// HISTORIAL PERSISTENTE LOCAL
// ===============================

let studyHistory =
JSON.parse(localStorage.getItem("studyHistory")) || [];

// ===============================
// GUARDAR RESPUESTA
// ===============================

function saveAnswer(question, userAnswer, correctAnswer, isCorrect){

const item = {

question,
userAnswer,
correctAnswer,
isCorrect,
date: new Date().toLocaleString()

};

studyHistory.push(item);

// GUARDAR EN LOCALSTORAGE
localStorage.setItem(
"studyHistory",
JSON.stringify(studyHistory)
);

}

// ===============================
// MOSTRAR HISTORIAL
// ===============================

function renderHistory(){

const historyContainer =
document.getElementById("history-list");

if(!historyContainer) return;

historyContainer.innerHTML = "";

studyHistory.forEach((item, index) => {

const div = document.createElement("div");

div.className = "history-item";

div.innerHTML = `
<h3>📝 Pregunta ${index + 1}</h3>

<p><strong>Pregunta:</strong>
${item.question}</p>

<p><strong>Respuesta:</strong>
${item.userAnswer}</p>

<p><strong>Correcta:</strong>
${item.correctAnswer}</p>

<p><strong>Resultado:</strong>
${item.isCorrect ? "✅ Correcta" : "❌ Incorrecta"}</p>

<p><strong>Fecha:</strong>
${item.date}</p>

<hr>
`;

historyContainer.appendChild(div);

});

}

// ===============================
// BORRAR HISTORIAL
// ===============================

function clearHistory(){

localStorage.removeItem("studyHistory");

studyHistory = [];

renderHistory();

}

// ===============================
// EJEMPLO DE USO
// ===============================

// saveAnswer(
// "¿Cuánto es 2+2?",
// "4",
// "4",
// true
// );

document.addEventListener("DOMContentLoaded", () => {

renderHistory();

});
