
const studyTopics = {

ley_signos:`
<h2>➕➖ Ley de signos</h2>

<p>
La ley de signos se usa en multiplicaciones y divisiones.
</p>

<ul>
<li>➕ por ➕ = ➕</li>
<li>➖ por ➖ = ➕</li>
<li>➕ por ➖ = ➖</li>
<li>➖ por ➕ = ➖</li>
</ul>

<p>
Ejemplo:
(-5)(-2)=10
</p>

<p>
Porque negativo por negativo da positivo.
</p>
`,

jerarquia:`
<h2>📐 Jerarquía de operaciones</h2>

<p>
El orden correcto es:
</p>

<ol>
<li>Paréntesis</li>
<li>Potencias</li>
<li>Multiplicación y división</li>
<li>Suma y resta</li>
</ol>

<p>
Ejemplo:
5 + 2 × 3
</p>

<p>
Primero multiplicación:
2 × 3 = 6
</p>

<p>
Luego:
5 + 6 = 11
</p>
`,

lineales:`
<h2>📘 Ecuaciones lineales</h2>

<p>
Resolver una ecuación lineal significa encontrar el valor de x.
</p>

<p>
Ejemplo:
x + 7 = 15
</p>

<p>
Pasamos el 7 restando:
</p>

<p>
x = 15 - 7
</p>

<p>
x = 8
</p>
`,

segundo_grado:`
<h2>🧠 Ecuaciones de segundo grado</h2>

<p>
Estas ecuaciones tienen x².
</p>

<p>
Ejemplo:
x² - 9x + 20 = 0
</p>

<p>
Buscamos dos números que:
</p>

<ul>
<li>multipliquen 20</li>
<li>sumen -9</li>
</ul>

<p>
Son -4 y -5.
</p>

<p>
Entonces:
(x-4)(x-5)=0
</p>
`,

pitagoras:`
<h2>📏 Teorema de Pitágoras</h2>

<p>
Se usa para encontrar lados de triángulos rectángulos.
</p>

<p>
Fórmula:
a² + b² = c²
</p>

<p>
Ejemplo:
3² + 4² = 9 + 16 = 25
</p>

<p>
Raíz de 25 = 5
</p>
`,

mru:`
<h2>🚗 MRU</h2>

<p>
MRU significa Movimiento Rectilíneo Uniforme.
</p>

<p>
La velocidad siempre es constante.
</p>

<p>
Fórmula:
v = d/t
</p>

<p>
Ejemplo:
50m en 5s
</p>

<p>
50/5 = 10 m/s
</p>
`,

mruv:`
<h2>⚡ MRUV</h2>

<p>
MRUV significa Movimiento Rectilíneo Uniformemente Variado.
</p>

<p>
Aquí sí existe aceleración.
</p>

<p>
Fórmula:
a=(vf-vi)/t
</p>

<p>
Ejemplo:
De 0 a 30m/s en 5s
</p>

<p>
30/5 = 6
</p>
`,

fuerza:`
<h2>💪 Fuerza</h2>

<p>
La fuerza se calcula con:
</p>

<p>
F = ma
</p>

<p>
m = masa
</p>

<p>
a = aceleración
</p>

<p>
Ejemplo:
m=10
a=2
</p>

<p>
F=20
</p>
`,

atomos:`
<h2>⚛️ Átomos</h2>

<p>
Los átomos tienen:
</p>

<ul>
<li>Protón ➕</li>
<li>Electrón ➖</li>
<li>Neutrón ⚪</li>
</ul>

<p>
Los protones y neutrones están en el núcleo.
</p>
`,

balanceo:`
<h2>🧪 Balanceo químico</h2>

<p>
Balancear significa que debe haber la misma cantidad de átomos en ambos lados.
</p>

<p>
Ejemplo:
H2 + O2 → H2O
</p>

<p>
Balanceado:
2H2 + O2 → 2H2O
</p>
`
};

function showStudyTopic(){

const selected =
document.getElementById("studyTopicSelect").value;

document.getElementById("studyContent").innerHTML =
studyTopics[selected];

}

showStudyTopic();

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

const subject=document.getElementById("subjectSelect").value;
const difficulty=document.getElementById("difficultySelect").value;

const pool=questions[subject][difficulty];

currentQuestion=pool[Math.floor(Math.random()*pool.length)];

renderQuestion();

}

function renderQuestion(){

document.getElementById("topic").innerText=currentQuestion.topic;
document.getElementById("question").innerText=currentQuestion.question;

document.getElementById("result").innerHTML="";

const difficulty=document.getElementById("difficultySelect").value;

const multiple=document.getElementById("multipleChoice");
const input=document.getElementById("answer");

multiple.innerHTML="";

if(difficulty==="easy"){

input.style.display="none";

currentQuestion.options.forEach(option=>{

const div=document.createElement("div");

div.className="option";
div.innerText=option;

div.onclick=()=>{

document.querySelectorAll(".option").forEach(el=>{
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

const difficulty=document.getElementById("difficultySelect").value;

let userAnswer="";

if(difficulty==="easy"){
userAnswer=selectedOption;
}else{
userAnswer=document.getElementById("answer").value.toLowerCase().trim();
}

const correctAnswer=currentQuestion.answer.toLowerCase();

if(userAnswer===correctAnswer){

xp+=10;
correct++;

document.getElementById("result").innerHTML=
"<h2 style='color:#22d3ee;'>✅ Correcto</h2>";

}else{

wrong++;

document.getElementById("result").innerHTML=
"<h2 style='color:#ef4444;'>❌ Incorrecto</h2>"+
"<p><strong>Correcta:</strong> "+currentQuestion.answer+"</p>"+
"<p>"+currentQuestion.explanation+"</p>";

}

updateUI();

}

function updateUI(){

document.getElementById("xp").innerText=xp;
document.getElementById("correct").innerText=correct;
document.getElementById("wrong").innerText=wrong;

const total=correct+wrong;

const accuracy=
total>0
? Math.round((correct/total)*100)
: 0;

document.getElementById("accuracy").innerText=accuracy+"%";

const level=Math.floor(xp/100)+1;

document.getElementById("level").innerText=level;

document.getElementById("progressFill").style.width=(xp%100)+"%";

}

nextQuestion();
