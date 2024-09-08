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
  //Functions

  const initializeGame = ( numPlayers = 2) => {
    createDeck();
    playerPoints = [];
    for (let i = 0; i < numPlayers; i++) {
      playerPoints.push(0);
    }
    console.log(playerPoints);
    
    small.forEach((value) => value.innerText = 0);

    divPlayerCards.forEach( (value) => value.innerHTML = "");

    btnGetCard.disabled = false;
    btnStopGame.disabled = false;
  };

  btnGetCard.addEventListener("click", () => {
    const card = getCard( decks );
    const numberCard = getValueCard(card);
    //*Add Card
    createCard(0 , card);
    //* Add points
    const points = accumulatePoints( 0 , numberCard);
    //* Condicionales

    if (points > 21) {
      computerTurn(points);
      btnGetCard.disabled = true;
      btnStopGame.disabled = true;
      
    }else if (points === 21) {
      computerTurn(points);
      btnGetCard.disabled = true;
      btnStopGame.disabled = true;
    }


  });

  btnStopGame.addEventListener("click", () => {
    const [firstPlayerPoints] =playerPoints
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;
    computerTurn(firstPlayerPoints);
  });


  btnNewGame.addEventListener("click", () => {

   initializeGame();
  });



  const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (const tipo of typeCards) {
        decks.push(i+tipo)
      }
    }

    for (const especial of especialsCards) {
      for (const tipo of typeCards) {
        decks.push(especial+tipo);   
      }
    }
    
    return randomDeck( decks );
  };



  const randomDeck = ( deck = [] ) => {
    
    for (let i = 0; i < deck.length; i++) {
      let indexRand = Math.floor(Math.random() * (deck.length - i) + i);
      let support = deck[i];
      deck[i] = deck[indexRand];
      deck[indexRand] = support;
    }
  };

  const getCard = ( deck = [] ) => deck.shift();

  const getValueCard = ( card = "" ) => {
    let valueNumeric = card.substring(0, card.length - 1);
    return (isNaN(valueNumeric) ? 
          (valueNumeric == "A") ? 
          11 : 10 : valueNumeric * 1);
  };

  const createCard = ( turn, card ) => {
    let img = document.createElement("img");
    img.src = `assets/poker-cards/cards/${card}.png`;
    img.classList = "card";
    divPlayerCards[turn].append(img);
  };


  
  const accumulatePoints = ( turn , valueCard ) => {
    playerPoints[turn] =   playerPoints[turn] + valueCard;
    small[turn].innerText = playerPoints[turn];
    return playerPoints[turn];
  };

  const gameWinner = () => {
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



  const computerTurn = ( totalPoints = 0 ) => {
    let computerPoints = 0;
    
    do {
      let card = getCard(decks);
      let numberCard = getValueCard(card); 
      computerPoints = accumulatePoints(playerPoints.length - 1, numberCard);
      createCard(playerPoints.length - 1 , card); 
    } while ( (computerPoints < totalPoints) && (totalPoints <= 21));

    gameWinner();

  };


 


})();