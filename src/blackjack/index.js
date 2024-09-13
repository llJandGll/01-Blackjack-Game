/* Este import en particular lo que hace es renombrar el create deck
pero solo en este archivo ya no funcionaria el createDeck si no funcionaria el nuevoDeck */
// import { createDeck as nuevoDeck } from './usecases';

import { createDeck, getCard, getValueCard, computerTurn, createCard, accumulatePoints } from "./usecases";

(() => {
  let decks = [];

  let playerPoints = [];

  const typeCards = ["C","D","H","S"], 
        especialsCards = ["A","J","Q","K"];


  //* REFERENCES

  const btnGetCard = document.querySelector("#btnGetCard"),
        btnNewGame = document.querySelector("#btnNewGame"),
        btnStopGame = document.querySelector("#btnStopGame")
        

  const divPlayerCards = document.querySelectorAll(".divCartas"),
                small = document.querySelectorAll("small");


  //* Functions
  
  const initializeGame = ( numPlayers = 2) => {
    decks = createDeck( typeCards, especialsCards );
    
    playerPoints = [];
    for (let i = 0; i < numPlayers; i++) {
      playerPoints.push(0);
    }
    
    small.forEach((value) => value.innerText = 0);

    divPlayerCards.forEach( (value) => value.innerHTML = "");

    btnGetCard.disabled = false;
    btnStopGame.disabled = false;
  };

  btnGetCard.addEventListener("click", () => {
    const card = getCard( decks );
    const numberCard = getValueCard(card);
    //*Add Card
    createCard(0 , card, divPlayerCards);
    //* Add points
    const totalPointsPlayer = accumulatePoints( 0 , numberCard, playerPoints,small);
    //* Condicionales
    if (totalPointsPlayer > 21) {
      computerTurn(decks, totalPointsPlayer, playerPoints, divPlayerCards, small);
      btnGetCard.disabled = true;
      btnStopGame.disabled = true;
      
    }else if (totalPointsPlayer === 21) {
      computerTurn(decks, totalPointsPlayer, playerPoints, divPlayerCards, small);
      btnGetCard.disabled = true;
      btnStopGame.disabled = true;
    }


  });

  btnStopGame.addEventListener("click", () => {
    const [firstPlayerPoints] =playerPoints
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;
    computerTurn(decks, firstPlayerPoints, playerPoints, divPlayerCards, small);
  });


  btnNewGame.addEventListener("click", () => {

   initializeGame();
  });

})();