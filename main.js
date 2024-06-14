const studycards = document.getElementsByClassName("studycards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

let cardsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [ ];

cardsArray.forEach(studyCardMaker);

function studyCardMaker(text){
  var div = document.createElement('div');
  var h3_question = document.createElement('h3');
  var h3_answer = document.createElement('h3');
  div.className = 'studycards';

  h3_question.setAttribute('style', "border-top:1px solid pink");
  h3_question.innerHTML = text.my_question;

  h3_question.setAttribute("style", "border-bottom: 3px solid rgb(197, 54, 54); padding: 25px 34px; margin-top:20px");
  h3_question.textContent = text.my_question;

  h3_answer.setAttribute("style", "text-align:center; display:none; color:red");
  h3_answer.textContent = text.my_answer;

div.appendChild(h3_question);
div.appendChild(h3_answer);


div.addEventListener("click", function(){
  if (h3_answer.style.display == 'none')
    h3_answer.style.display = "block";
  else
  h3_answer.style.display= "none";
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