const studycards= document.getElementsByClassName("studycards")[0];
const createBox = document.getElementsByClassName("create-box")[0];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
let cardsArray = localStorage.getItem('items')?
JSON.parse(localStorage.getItem('items')) : [];

cardsArray.forEach(studycardMaker);

function studycardMaker(text){
const div = document.createElement("div");
const question = document.createElement('h2');
const answer = document.createElement('h3');
div.className = 'studycards';

question.setAttribute('style', "border-top:4px solid red; padding: 20px; margin-top: 40px")
question.innerHTML = text.question_input;

answer.setAttribute('style', "text-align-center; display: none; color: pink");
answer.innerHTML = text.answer_input;

div.appendChild(question);
div.appendChild(answer);

div.addEventListener('click', function(){
  if (answer.style.display == 'none')
    answer.style.display = 'block';
  else
  answer.style.display = 'none';
})
studycards.appendChild(div);
}

const addCard = () =>{
  let studycardInformation = {
    'question_input' : question.value,
    'answer_input' : answer.value,
  }
  cardsArray.push(studycardInformation);
  localStorage.setItem('items', JSON.stringify(cardsArray));
  studycardMaker(cardsArray[cardsArray.length-1])
  question.value = '';
  answer.value = '';
}

const resetCards= () =>{
localStorage.clear();
studycards.innerHTML = '';
cardsArray = [];
}

const goToCreate =() =>{
createBox.style.display ="block";
}

const exitCreateBox= () =>{
  createBox.style.display = "none";
}