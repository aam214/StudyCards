const studycards = document.getElementsByClassName("studycards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

var cardsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

cardsArray.forEach(studyCardMaker);

function studyCardMaker(text){
  const div = document.createElement('div');
  const h3_question = document.createElement('h3');
  const h2_answer = document.createElement('h2');
  div.className = 'studycards';


  h3_question.setAttribute("style", "padding: 25px 38px");
  h3_question.textContent = text.my_question;

  h2_answer.setAttribute("style", "text-align:center; display:none; color: red");
  h2_answer.textContent = text.my_answer;

div.appendChild(h3_question);
div.appendChild(h2_answer);

div.addEventListener("click", ()=> {
  if (h2_answer.style.display == "none")
    h2_answer.style.display = "block";
  else
  h2_answer.style.display= "none";
});
studycards.appendChild(div);
}

function addCard(){
let cardInformation = {
  'my_question' : question.value,
  'my_answer' : answer.value,
}
cardsArray.push(cardInformation);
localStorage.setItem('items', JSON.stringify(cardsArray));
studyCardMaker(cardsArray[cardsArray.length - 1]);
question.value = '';
answer.value = '';
}


function resetCards(){
localStorage.clear();
studycards.innerHTML = '';
cardsArray = [];
}

function exitCreateCard(){
  createBox.style.display = "none";
}

function goToCreate(){
  createBox.style.display = "block";
}