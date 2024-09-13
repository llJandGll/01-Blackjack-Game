
export const accumulatePoints = ( turn , valueCard, playerPoints, small ) => {
  playerPoints[turn] =   playerPoints[turn] + valueCard;
  small[turn].innerText = playerPoints[turn];
  return playerPoints[turn];
};
