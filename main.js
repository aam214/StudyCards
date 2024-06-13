const studycards = document.getElementsByClassName("studycards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question =document.getElementById("question");
const answer =document.getElementById("answer");

let cardsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

cardsArray.forEach(studyCardMaker);
function studyCardMaker(text){
  let div = document.createElement("div");
  let h3_question = document.createElement('h3');
  let h3_answer = document.createElement('h3');
}

function addCard(){
let cardInformation = {
  'my-question' : question.value,
  'my-answer' : answer.value,
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