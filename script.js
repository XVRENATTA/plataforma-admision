
function showPractice(){

hideAll();

document.getElementById("practiceScreen")
.classList.add("active");

}

function showStudy(){

hideAll();

document.getElementById("studyScreen")
.classList.add("active");

}

function goHome(){

hideAll();

document.getElementById("homeScreen")
.classList.add("active");

}

function hideAll(){

document.querySelectorAll(".screen")
.forEach(screen=>{
screen.classList.remove("active");
});

}

const studyData = {

math:{

"ley_signos":`
<h2>➕➖ Ley de signos</h2>

<p>
Negativo por negativo = positivo.
</p>

<p>
Positivo por negativo = negativo.
</p>

<p>
Ejemplo:
(-5)(-2)=10
</p>
`,

"jerarquia":`
<h2>📐 Jerarquía de operaciones</h2>

<p>
Orden:
</p>

<ol>
<li>Paréntesis</li>
<li>Potencias</li>
<li>Multiplicación y división</li>
<li>Suma y resta</li>
</ol>

<p>
Ejemplo:
5 + 2 × 3 = 11
</p>
`,

"segundo_grado":`
<h2>🧠 Segundo grado</h2>

<p>
Las ecuaciones de segundo grado tienen x².
</p>

<p>
Ejemplo:
x² - 9x + 20 = 0
</p>

<p>
Se factoriza:
(x-4)(x-5)
</p>
`

},

physics:{

"mru":`
<h2>🚗 MRU</h2>

<p>
Movimiento rectilíneo uniforme.
</p>

<p>
Fórmula:
v=d/t
</p>
`,

"mruv":`
<h2>⚡ MRUV</h2>

<p>
Movimiento rectilíneo uniformemente variado.
</p>

<p>
Fórmula:
a=(vf-vi)/t
</p>
`,

"fuerza":`
<h2>💪 Fuerza</h2>

<p>
F=ma
</p>

<p>
F = fuerza
</p>

<p>
m = masa
</p>

<p>
a = aceleración
</p>
`

},

chemistry:{

"atomos":`
<h2>⚛️ Átomos</h2>

<p>
Protón ➕
</p>

<p>
Electrón ➖
</p>

<p>
Neutrón ⚪
</p>
`,

"balanceo":`
<h2>🧪 Balanceo químico</h2>

<p>
Debe haber mismos átomos en ambos lados.
</p>

<p>
2H2 + O2 → 2H2O
</p>
`,

"enlaces":`
<h2>🔗 Enlaces químicos</h2>

<p>
El covalente comparte electrones.
</p>
`

}

};

function updateTopics(){

const subject =
document.getElementById("studySubject").value;

const topicSelect =
document.getElementById("studyTopic");

topicSelect.innerHTML = "";

Object.keys(studyData[subject])
.forEach(topic=>{

const option =
document.createElement("option");

option.value = topic;

option.textContent =
topic.replaceAll("_"," ");

topicSelect.appendChild(option);

});

showStudyContent();

}

function showStudyContent(){

const subject =
document.getElementById("studySubject").value;

const topic =
document.getElementById("studyTopic").value;

document.getElementById("studyContent")
.innerHTML =
studyData[subject][topic];

}

updateTopics();

let xp=0;
let correct=0;
let wrong=0;

let currentQuestion;
let selectedOption="";

const questions={

math:{

easy:[
{
topic:"Ley de signos",
question:"¿Cuánto es (-5)(-2)?",
options:["-10","10","5","-5"],
answer:"10",
explanation:"Negativo por negativo = positivo."
}
],

medium:[
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
question:"Resuelve x²-9x+20=0",
answer:"4 y 5",
explanation:"(x-4)(x-5)=0"
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
question:"Aceleración de 0 a 30m/s en 5s.",
answer:"6",
explanation:"a=(vf-vi)/t"
}
],

hard:[
{
topic:"Fuerza",
question:"¿Fuerza si m=10 y a=2?",
answer:"20",
explanation:"F=ma"
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
explanation:"Na=sodio."
}
],

hard:[
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

selectedOption="";

const subject=
document.getElementById("subjectSelect").value;

const difficulty=
document.getElementById("difficultySelect").value;

const pool=questions[subject][difficulty];

currentQuestion=
pool[Math.floor(Math.random()*pool.length)];

renderQuestion();

}

function renderQuestion(){

document.getElementById("topic").innerText=
currentQuestion.topic;

document.getElementById("question").innerText=
currentQuestion.question;

document.getElementById("result").innerHTML="";

const difficulty=
document.getElementById("difficultySelect").value;

const multiple=
document.getElementById("multipleChoice");

const input=
document.getElementById("answer");

multiple.innerHTML="";

if(difficulty==="easy"){

input.style.display="none";

currentQuestion.options.forEach(option=>{

const div=document.createElement("div");

div.className="option";

div.innerText=option;

div.onclick=()=>{

document.querySelectorAll(".option")
.forEach(el=>{
el.classList.remove("selected");
});

div.classList.add("selected");

selectedOption=option.toLowerCase();

};

multiple.appendChild(div);

});

}else{

input.style.display="block";

input.value="";

}

}

function checkAnswer(){

const difficulty=
document.getElementById("difficultySelect").value;

let userAnswer="";

if(difficulty==="easy"){

userAnswer=selectedOption;

}else{

userAnswer=
document.getElementById("answer")
.value
.toLowerCase()
.trim();

}

const correctAnswer=
currentQuestion.answer.toLowerCase();

if(userAnswer===correctAnswer){

xp+=10;

correct++;

document.getElementById("result").innerHTML=
"<h2 style='color:#22d3ee;'>✅ Correcto</h2>";

}else{

wrong++;

document.getElementById("result").innerHTML=
"<h2 style='color:#ef4444;'>❌ Incorrecto</h2>"+
"<p><strong>Correcta:</strong> "+
currentQuestion.answer+
"</p>"+
"<p>"+currentQuestion.explanation+"</p>";

}

updateUI();

}

function updateUI(){

document.getElementById("xp").innerText=xp;

document.getElementById("correct").innerText=correct;

document.getElementById("wrong").innerText=wrong;

document.getElementById("weakCount").innerText=wrong;

const total=correct+wrong;

const accuracy=
total>0
? Math.round((correct/total)*100)
: 0;

document.getElementById("accuracy").innerText=
accuracy+"%";

const level=Math.floor(xp/100)+1;

document.getElementById("level").innerText=level;

document.getElementById("progressFill").style.width=
(xp%100)+"%";

}

nextQuestion();
