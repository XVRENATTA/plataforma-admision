let xp = 0;
let correct = 0;
let wrong = 0;

let currentQuestion;
let selectedOption = "";

const questions = {

math:{

easy:[

{
topic:"Ley de signos",
question:"¿Cuánto es (-5)(-2)?",
options:["-10","10","7","-7"],
answer:"10",
explanation:"Negativo por negativo = positivo."
},

{
topic:"Jerarquía de operaciones",
question:"¿Cuánto es 5 + 2 × 3?",
options:["21","11","15","9"],
answer:"11",
explanation:"Primero se hace la multiplicación."
},

{
topic:"Ecuaciones lineales",
question:"¿Cuál es el valor de x en x + 7 = 15?",
options:["6","9","8","7"],
answer:"8",
explanation:"15 - 7 = 8."
}

],

medium:[

{
topic:"Pitágoras",
question:"Calcula la hipotenusa si los catetos son 6 y 8.",
answer:"10",
explanation:"6² + 8² = 100 y raíz de 100 = 10."
},

{
topic:"Segundo grado",
question:"Resuelve x² - 7x + 12 = 0",
answer:"3 y 4",
explanation:"(x-3)(x-4)=0"
}

],

hard:[

{
topic:"Segundo grado",
question:"Resuelve x² - 9x + 20 = 0",
answer:"4 y 5",
explanation:"(x-4)(x-5)=0"
}

]

},

physics:{

easy:[

{
topic:"MRU",
question:"¿Cuál es la velocidad si recorres 50 metros en 5 segundos?",
options:["5","15","10","20"],
answer:"10",
explanation:"v = d/t = 50/5."
},

{
topic:"Conversiones",
question:"¿Cuántos metros tiene 1 kilómetro?",
options:["100","1000","10","500"],
answer:"1000",
explanation:"1 km = 1000 m."
}

],

medium:[

{
topic:"MRUV",
question:"Calcula la aceleración si un objeto pasa de 0 m/s a 30 m/s en 5 segundos.",
answer:"6",
explanation:"a=(vf-vi)/t"
}

],

hard:[

{
topic:"Fuerza",
question:"¿Cuánto vale la fuerza si m = 10 y a = 2?",
answer:"20",
explanation:"F = ma = 10 × 2."
}

]

},

chemistry:{

easy:[

{
topic:"Átomos",
question:"¿Cuál es la partícula con carga positiva?",
options:["Electrón","Neutrón","Fotón","Protón"],
answer:"protón",
explanation:"El protón tiene carga positiva."
},

{
topic:"Ácidos y bases",
question:"¿Qué tiene un pH mayor a 7?",
options:["Ácido","Base","Metal","Gas"],
answer:"base",
explanation:"Las bases tienen pH mayor a 7."
}

],

medium:[

{
topic:"Balanceo",
question:"Balancea: H2 + O2 -> H2O",
answer:"2h2 + o2 -> 2h2o",
explanation:"Debe haber mismos átomos en ambos lados."
}

],

hard:[

{
topic:"Modelo atómico",
question:"¿Quién propuso los niveles de energía?",
answer:"bohr",
explanation:"Fue propuesto por Niels Bohr."
}

]

}

};

function nextQuestion(){

selectedOption = "";

const subject = document.getElementById("subjectSelect").value;
const difficulty = document.getElementById("difficultySelect").value;

const pool = questions[subject][difficulty];

currentQuestion = pool[Math.floor(Math.random() * pool.length)];

document.getElementById("topic").innerText = currentQuestion.topic;
document.getElementById("question").innerText = currentQuestion.question;
document.getElementById("result").innerHTML = "";

const answerInput = document.getElementById("answer");
const multipleChoice = document.getElementById("multipleChoice");

multipleChoice.innerHTML = "";

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

const difficulty = document.getElementById("difficultySelect").value;

let userAnswer = "";

if(difficulty === "easy"){
userAnswer = selectedOption;
}else{
userAnswer = document.getElementById("answer").value.toLowerCase().trim();
}

const correctAnswer = currentQuestion.answer.toLowerCase();

const result = document.getElementById("result");

if(userAnswer === correctAnswer){

xp += 10;
correct++;

result.innerHTML = `
<h2 style="color:#22d3ee;">✅ Correcto</h2>
<p>${currentQuestion.explanation}</p>
`;

}else{

wrong++;

result.innerHTML = `
<h2 style="color:#ec4899;">❌ Incorrecto</h2>
<p><strong>Respuesta correcta:</strong> ${currentQuestion.answer}</p>
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

}

nextQuestion();
