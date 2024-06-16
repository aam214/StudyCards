
const createBox = document.getElementsByClassName("create-box")[0];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
let cardsArray = localStorage.getItem('items')?
JSON.parse(localStorage.getItem('items')) : [];

cardsArray.forEach(studycardMaker);

function studycardMaker(text){
const studycards = document.createElement("div");
const question = document.createElement('h5');
const answer = document.createElement('h5');
studycards.className = 'studycards';

question.setAttribute('style', "text-align:center; border-top:4px solid red; padding: 20px; margin-top: 40px")
question.innerHTML = text.question_input;

answer.setAttribute('style', "text-align:center; padding: 20px; display: none; color: #44001A");
answer.innerHTML = text.answer_input;

studycards.appendChild(question);
studycards.appendChild(answer);

studycards.addEventListener('click', function(){
  if (answer.style.display == 'none')
    answer.style.display = 'block';
  else
  answer.style.display = 'none';
})
document.querySelector("#studycards").appendChild(studycards);
}

function addCard(){
  let studycardInformation = {
    'question_input' : question.value,
    'answer_input' : answer.value,
  }

  cardsArray.push(studycardInformation);
  localStorage.setItem('items', JSON.stringify(cardsArray));
  studycardMaker(cardsArray[cardsArray.length-1], cardsArray.length - 1);
  question.value = '';
  answer.value = '';
}

function resetCards(){
localStorage.clear();
studycards.innerHTML ='';
cardsArray = [];
}

function goToCreate(){
createBox.style.display ="block";
}

function exitCreateBox(){
  createBox.style.display = "none";
}