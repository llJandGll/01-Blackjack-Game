export const gameWinner = ( playerPoints ) => {
  const [pintsPlayer , computerPoints] = playerPoints;
  
  setTimeout(() => {
    if (computerPoints === pintsPlayer) {
      alert("Empates");
    }else if (pintsPlayer > 21 ) {
      alert("Computadora Win");
    }else if (computerPoints > 21) {
      alert("Player Win");
    }else{
      alert("Computer Win")
    }
  }, 500);
};