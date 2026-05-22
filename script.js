let xp = 0;
let correct = 0;
let wrong = 0;

let stats = {
math:{correct:0,wrong:0},
physics:{correct:0,wrong:0},
chemistry:{correct:0,wrong:0}
};

const weakTopics = {};

const questions = {

math:{
easy:[
{topic:"Ley de signos",question:"(-5)(-2)",answer:"10",explanation:"Negativo por negativo = positivo"},
{topic:"Jerarquía",question:"5 + 2 × 3",answer:"11",explanation:"Primero multiplicación"},
{topic:"Lineales",question:"x + 7 = 15",answer:"8",explanation:"15 - 7 = 8"}
],

medium:[
{topic:"Pitágoras",question:"Hipotenusa de 6 y 8",answer:"10",explanation:"6² + 8² = 100"},
{topic:"Segundo grado",question:"x² - 7x + 12 = 0",answer:"3 y 4",explanation:"(x-3)(x-4)"}
],

hard:[
{topic:"Segundo grado",question:"x² - 9x + 20 = 0",answer:"4 y 5",explanation:"(x-4)(x-5)"}
]
},

physics:{
easy:[
{topic:"MRU",question:"Velocidad si recorres 50m en 5s",answer:"10",explanation:"v = d / t"}
],

medium:[
{topic:"MRUV",question:"Aceleración de 0 a 30m/s en 5s",answer:"6",explanation:"a = (vf - vi) / t"}
],

hard:[
{topic:"Fuerza",question:"F = ma si m = 10 y a = 2",answer:"20",explanation:"10 × 2 = 20"}
]
},

chemistry:{
easy:[
{topic:"Átomos",question:"Partícula positiva",answer:"proton",explanation:"El protón tiene carga positiva"}
],

medium:[
{topic:"Balanceo",question:"Balancea H2 + O2 -> H2O",answer:"2h2 + o2 -> 2h2o",explanation:"Debe haber mismos átomos"}
],

hard:[
{topic:"Modelos atómicos",question:"¿Quién propuso niveles de energía?",answer:"bohr",explanation:"Modelo de Bohr"}
]
}

};

let currentQuestion;

function nextQuestion(){

const subject = document.getElementById("subjectSelect").value;
const difficulty = document.getElementById("difficultySelect").value;

const pool = questions[subject][difficulty];

currentQuestion = pool[Math.floor(Math.random()*pool.length)];

document.getElementById("topic").innerText = currentQuestion.topic;
document.getElementById("question").innerText = currentQuestion.question;
document.getElementById("answer").value = "";
document.getElementById("result").innerHTML = "";

}

function checkAnswer(){

const subject = document.getElementById("subjectSelect").value;

const userAnswer = document.getElementById("answer").value.toLowerCase().trim();

const correctAnswer = currentQuestion.answer.toLowerCase();

const result = document.getElementById("result");

if(userAnswer === correctAnswer){

xp += 10;
correct++;
stats[subject].correct++;

result.innerHTML = `
<h2 style="color:#22d3ee;">✅ ¡Correcto!</h2>
<p>⭐ +10 XP</p>
`;

}else{

wrong++;
stats[subject].wrong++;

weakTopics[currentQuestion.topic] =
(weakTopics[currentQuestion.topic] || 0) + 1;

result.innerHTML = `
<h2 style="color:#ec4899;">❌ Incorrecto</h2>
<p><strong>Explicación:</strong></p>
<p>${currentQuestion.explanation}</p>
`;

}

updateUI();

}

function updateUI(){

document.getElementById("xp").innerText = xp;
document.getElementById("correct").innerText = correct;
document.getElementById("wrong").innerText = wrong;

const total = correct + wrong;

const accuracy = total > 0
? Math.round((correct / total) * 100)
: 0;

document.getElementById("accuracy").innerText = accuracy + "%";

updateSubjectStats();
updateWeakTopics();

}

function updateSubjectStats(){

updateOne("math","mathStats");
updateOne("physics","physicsStats");
updateOne("chemistry","chemistryStats");

}

function updateOne(subject,id){

const c = stats[subject].correct;
const w = stats[subject].wrong;

const total = c + w;

let accuracy = 0;

if(total > 0){
accuracy = Math.round((c / total) * 100);
}

document.getElementById(id).innerText = accuracy + "%";

}

function updateWeakTopics(){

const weakList = document.getElementById("weakTopics");

weakList.innerHTML = "";

const sortedTopics =
Object.entries(weakTopics)
.sort((a,b)=>b[1]-a[1]);

if(sortedTopics.length === 0){

weakList.innerHTML =
"<li>Aún no hay suficientes datos</li>";

return;

}

sortedTopics.slice(0,5).forEach(topic=>{

const li = document.createElement("li");

li.textContent =
topic[0] + " (" + topic[1] + " errores)";

weakList.appendChild(li);

});

}

nextQuestion();
