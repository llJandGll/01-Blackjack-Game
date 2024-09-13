import { gameWinner, getCard,getValueCard, accumulatePoints, createCard } from './index';

export const computerTurn = (decks ,totalPointsPlayer = 0 , playerPoints, divPlayerCards, small ) => {
  let computerPoints = 0;
  
  do {
    let card = getCard(decks);
    let numberCard = getValueCard(card); 
    computerPoints = accumulatePoints(playerPoints.length - 1, numberCard, playerPoints, small);
    createCard(playerPoints.length - 1 , card, divPlayerCards); 
  } while ( (computerPoints < totalPointsPlayer) && (totalPointsPlayer <= 21));

  gameWinner(playerPoints);

};