let currentQuestion;

let stats = JSON.parse(localStorage.getItem("stats")) || {
correct:0,
wrong:0,
xp:0,
weakTopics:{}
};

function init(){
const subjectSelect = document.getElementById("subjectSelect");
const studySubject = document.getElementById("studySubject");

Object.keys(questionBank).forEach(subject=>{

const option1 = document.createElement("option");
option1.value = subject;
option1.textContent = subject;
subjectSelect.appendChild(option1);

const option2 = document.createElement("option");
option2.value = subject;
option2.textContent = subject;
studySubject.appendChild(option2);

});

loadQuestions();
loadStudyTopics();
updateStats();
}

function hideAll(){
document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
}

function showPractice(){
hideAll();
document.getElementById("practiceScreen").classList.add("active");
}

function showStudy(){
hideAll();
document.getElementById("studyScreen").classList.add("active");
}

function goHome(){
hideAll();
document.getElementById("homeScreen").classList.add("active");
}

function loadQuestions(){

const subject = document.getElementById("subjectSelect").value || "matematicas";

const questions = questionBank[subject];

currentQuestion = questions[Math.floor(Math.random()*questions.length)];

document.getElementById("questionText").textContent = currentQuestion.question;

const optionsContainer = document.getElementById("optionsContainer");

optionsContainer.innerHTML = "";

if(currentQuestion.options){

currentQuestion.options.forEach(option=>{

const btn = document.createElement("button");

btn.className = "option-btn";

btn.textContent = option;

btn.onclick = ()=>{
document.getElementById("answerInput").value = option;
};

optionsContainer.appendChild(btn);

});

}

}

function normalize(text){
return text.toLowerCase().trim();
}

function checkAnswer(){

const input = normalize(document.getElementById("answerInput").value);

const correct = currentQuestion.answers.some(a=>normalize(a)===input);

if(correct){

document.getElementById("feedback").textContent = "✅ Correcto";

stats.correct++;
stats.xp += 20;

}else{

document.getElementById("feedback").textContent = "❌ Incorrecto";

stats.wrong++;

const topic = currentQuestion.topic;

if(!stats.weakTopics[topic]){
stats.weakTopics[topic] = 0;
}

stats.weakTopics[topic]++;

}

document.getElementById("explanationBox").textContent = currentQuestion.explanation;

updateStats();

}

function showHint(){
document.getElementById("hintBox").textContent = currentQuestion.hint;
}

function nextQuestion(){
loadQuestions();
}

function updateStats(){

localStorage.setItem("stats", JSON.stringify(stats));

document.getElementById("correctCount").textContent =
"Correctas: " + stats.correct;

document.getElementById("wrongCount").textContent =
"Incorrectas: " + stats.wrong;

document.getElementById("xpDisplay").textContent =
"XP: " + stats.xp;

const weak = Object.entries(stats.weakTopics).sort((a,b)=>b[1]-a[1])[0];

if(weak){

document.getElementById("weakTopic").textContent =
"Tema débil: " + weak[0];

}

}

function loadStudyTopics(){

const subject = document.getElementById("studySubject").value || "matematicas";

const topics = Object.keys(studyContent[subject]);

const topicSelect = document.getElementById("studyTopic");

topicSelect.innerHTML = "";

topics.forEach(topic=>{

const option = document.createElement("option");

option.value = topic;

option.textContent = topic;

topicSelect.appendChild(option);

});

renderStudy();

}

function renderStudy(){

const subject = document.getElementById("studySubject").value;

const topic = document.getElementById("studyTopic").value;

const data = studyContent[subject][topic];

document.getElementById("studyContentBox").innerHTML = `
<h2>${data.title}</h2>
<p>${data.theory}</p>
<pre>${data.formula}</pre>
<pre>${data.example}</pre>
<ul>
${data.tips.map(t=>`<li>${t}</li>`).join("")}
</ul>
`;

}

document.getElementById("subjectSelect").addEventListener("change", loadQuestions);
document.getElementById("studySubject").addEventListener("change", loadStudyTopics);
document.getElementById("studyTopic").addEventListener("change", renderStudy);

init();