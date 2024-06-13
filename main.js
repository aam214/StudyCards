const studycards = document.getElementsByClassName("studycards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question =document.getElementById("question");
const answer =document.getElementById("answer");

let cardsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function resetCards(){
localStorage.clear();
studycards.innerHTML = '';
cardsArray = [];
}