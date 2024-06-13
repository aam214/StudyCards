const studycards = document.getElementsByClassName("studycards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question =document.getElementById("question");
const answer =document.getElementById("answer");

let cardsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function addCard(){
let cardInformation = {
  'my-question' : question.value,
  'my-answer' : answer.value,
}
cardsArray.push(cardInformation);
localStorage.setItem('items', JSON.stringify(cardsArray));
cardMaker(cardsArray[cardsArray.length - 1]);
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