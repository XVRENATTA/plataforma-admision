
let xp = 0;
let correct = 0;
let wrong = 0;

let currentQuestion;
let selectedOption = "";

let weakQuestions = [];
let weakTopicsCount = {};

const questions = {

math:{

easy:[
{
topic:"Ley de signos",
question:"¿Cuánto es (-5)(-2)?",
options:["-10","10","7","-7"],
answer:"10",
explanation:"Negativo por negativo = positivo."
}
],

medium:[
{
topic:"Pitágoras",
question:"Calcula la hipotenusa si los catetos son 6 y 8.",
answer:"10",
explanation:"6² + 8² = 100."
},
{
topic:"Porcentajes",
question:"¿Cuánto es el 25% de 200?",
answer:"50",
explanation:"0.25 × 200."
}
],

hard:[
{
topic:"Segundo grado",
question:"Resuelve x² - 9x + 20 = 0",
answer:"4 y 5",
explanation:"(x-4)(x-5)=0"
},
{
topic:"Áreas",
question:"Área de triángulo base 10 altura 8.",
answer:"40",
explanation:"(10×8)/2"
}
]

},

physics:{

easy:[
{
topic:"MRU",
question:"¿Velocidad si recorre 50m en 5s?",
options:["5","10","20","15"],
answer:"10",
explanation:"v=d/t"
}
],

medium:[
{
topic:"MRUV",
question:"Calcula aceleración de 0 a 30m/s en 5s.",
answer:"6",
explanation:"a=(vf-vi)/t"
},
{
topic:"Distancia",
question:"¿Distancia si v=10 y t=5?",
answer:"50",
explanation:"d=vt"
}
],

hard:[
{
topic:"Fuerza",
question:"¿Fuerza si m=10 y a=2?",
answer:"20",
explanation:"F=ma"
},
{
topic:"Tiempo",
question:"¿Tiempo si recorre 150m a 15m/s?",
answer:"10",
explanation:"t=d/v"
}
]

},

chemistry:{

easy:[
{
topic:"Átomos",
question:"¿Partícula positiva?",
options:["Protón","Electrón","Neutrón","Fotón"],
answer:"protón",
explanation:"Protón positivo."
}
],

medium:[
{
topic:"Tabla periódica",
question:"Símbolo químico del sodio.",
answer:"na",
explanation:"Na = sodio."
},
{
topic:"Mezclas",
question:"¿El agua con sal es mezcla?",
answer:"sí",
explanation:"Es mezcla homogénea."
}
],

hard:[
{
topic:"Modelo atómico",
question:"¿Quién propuso niveles de energía?",
answer:"bohr",
explanation:"Modelo de Bohr."
},
{
topic:"Enlaces",
question:"¿Qué enlace comparte electrones?",
answer:"covalente",
explanation:"Enlace covalente."
}
]

}

};

function nextQuestion(){

selectedOption = "";

const subject = document.getElementById("subjectSelect").value;
const difficulty = document.getElementById("difficultySelect").value;

const pool = questions[subject][difficulty];

currentQuestion = pool[Math.floor(Math.random()*pool.length)];

renderQuestion();

}

function renderQuestion(){

document.getElementById("topic").innerText = currentQuestion.topic;
document.getElementById("question").innerText = currentQuestion.question;

document.getElementById("result").innerHTML = "";

const answerInput = document.getElementById("answer");
const multipleChoice = document.getElementById("multipleChoice");

multipleChoice.innerHTML = "";

const difficulty = document.getElementById("difficultySelect").value;

if(difficulty === "easy"){

answerInput.style.display = "none";

currentQuestion.options.forEach(option=>{

const div = document.createElement("div");

div.className = "option";

div.innerText = option;

div.onclick = ()=>{

document.querySelectorAll(".option").forEach(el=>{
el.classList.remove("selected");
});

div.classList.add("selected");

selectedOption = option.toLowerCase();

};

multipleChoice.appendChild(div);

});

}else{

answerInput.style.display = "block";
answerInput.value = "";

}

}

function checkAnswer(){

const difficulty =
document.getElementById("difficultySelect").value;

let userAnswer = "";

if(difficulty === "easy"){
userAnswer = selectedOption;
}else{
userAnswer =
document.getElementById("answer").value.toLowerCase().trim();
}

const correctAnswer =
currentQuestion.answer.toLowerCase();

const result =
document.getElementById("result");

if(userAnswer === correctAnswer){

xp += 10;
correct++;

result.innerHTML =
"<h2 style='color:#22d3ee;'>✅ Correcto</h2>";

}else{

wrong++;

weakQuestions.push({
topic:currentQuestion.topic,
question:currentQuestion.question,
yourAnswer:userAnswer || "(sin respuesta)",
correct:currentQuestion.answer
});

weakTopicsCount[currentQuestion.topic] =
(weakTopicsCount[currentQuestion.topic] || 0) + 1;

result.innerHTML =
"<h2 style='color:#ef4444;'>❌ Incorrecto</h2>" +
"<p><strong>Correcta:</strong> " + currentQuestion.answer + "</p>";

}

updateUI();

}

function updateUI(){

document.getElementById("xp").innerText = xp;
document.getElementById("correct").innerText = correct;
document.getElementById("wrong").innerText = wrong;
document.getElementById("weakCount").innerText = weakQuestions.length;

const total = correct + wrong;

const accuracy =
total > 0
? Math.round((correct / total) * 100)
: 0;

document.getElementById("accuracy").innerText = accuracy + "%";

const level = Math.floor(xp / 100) + 1;

document.getElementById("level").innerText = level;

document.getElementById("progressFill").style.width =
(xp % 100) + "%";

updateHistory();
updateWeakTopics();

}

function updateHistory(){

const history = document.getElementById("history");

history.innerHTML = "";

weakQuestions.slice(-5).reverse().forEach(item=>{

history.innerHTML +=
"<div class='history-item'>" +
"<h3>" + item.topic + "</h3>" +
"<p><strong>Pregunta:</strong> " + item.question + "</p>" +
"<p><strong>Tu respuesta:</strong> " + item.yourAnswer + "</p>" +
"<p><strong>Correcta:</strong> " + item.correct + "</p>" +
"</div>";

});

}

function updateWeakTopics(){

const weak = document.getElementById("weakTopics");

weak.innerHTML = "";

const sorted =
Object.entries(weakTopicsCount)
.sort((a,b)=>b[1]-a[1]);

sorted.forEach(topic=>{

weak.innerHTML +=
"<li>" + topic[0] + " (" + topic[1] + " errores)</li>";

});

}

function practiceWeakTopics(){

if(weakQuestions.length === 0){
alert("No hay errores todavía.");
return;
}

const randomWeak =
weakQuestions[
Math.floor(Math.random()*weakQuestions.length)
];

currentQuestion = {
topic:randomWeak.topic,
question:randomWeak.question,
answer:randomWeak.correct,
explanation:"Repaso."
};

renderQuestion();

}

nextQuestion();
