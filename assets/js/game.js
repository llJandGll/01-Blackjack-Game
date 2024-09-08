(() => {
  let decks = [];

  let playerPoints = 0,
      computerPoints= 0;

  const typeCards = ["C","D","H","S"], 
        especialsCards = ["A","J","Q","K"];


  //* REFERENCES

  const btnGetCard = document.querySelector("#btnGetCard"),
        btnNewGame = document.querySelector("#btnNewGame"),
        btnStopGame = document.querySelector("#btnStopGame"),
        divPlayer = document.querySelector("#player-cards"),
        divComputer = document.querySelector("#computer-cards"),
        small = document.querySelectorAll("small");



  //Functions

  const initializeGame = () => {
    createDeck();
  };

  btnGetCard.addEventListener("click", () => {
    if (decks.length == 0) initializeGame(); 
    const card = getCard( decks );
    const numberCard = getValueCard(card);
    //*Add Card
    let img = document.createElement("img");
    img.src = `assets/poker-cards/cards/${card}.png`;
    img.classList = "card";
    divPlayer.append(img);

    //* Add points

    small[0].innerText = (playerPoints += numberCard);
    //* Condicionales

    if (playerPoints > 21) {
      computerTurn(playerPoints);
      btnGetCard.disabled = true;
      btnStopGame.disabled = true;
      
    }else if (playerPoints === 21) {
      computerTurn(playerPoints);
      btnGetCard.disabled = true;
      btnStopGame.disabled = true;
    }


  });

  btnStopGame.addEventListener("click", () => {
    
    if (decks.length <= 0) {
      alert("No se puede detener sin una carta previa");
      return;
    }
    btnGetCard.disabled = true;
    btnStopGame.disabled = true;
    computerTurn(playerPoints);
    btnGetCard.disabled = true;
  });


  btnNewGame.addEventListener("click", () => {
    console.clear();
    decks = [];
    
    playerPoints = 0;
    computerPoints = 0;
    small[0].innerText = playerPoints;
    small[1].innerText = computerPoints;
    divPlayer.innerHTML = "";
    divComputer.innerHTML="";


    btnGetCard.disabled = false;
    btnStopGame.disabled = false;
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




  const getCard = ( deck = [] ) => (deck.length <= 0) ? 
                                    console.error("No hay cartas para quitar") :
                                    deck.shift();

  const getValueCard = ( card = "" ) => {
    let valueNumeric = card.substring(0, card.length - 1);
    

    return (isNaN(valueNumeric) ? 
          (valueNumeric == "A") ? 
          11 : 10 : valueNumeric * 1);
  };


  const computerTurn = ( totalPoints = 0 ) => {
    
    do {
      let card = getCard(decks);
      let numberCard = getValueCard(card); 
      computerPoints += numberCard

      let img = document.createElement("img");
      img.classList = "card";
      img.src = `assets/poker-cards/cards/${card}.png`;
      divComputer.append(img);
      
      small[1].innerText =  computerPoints;

      if (totalPoints > 21) {

        break;
      }
      
    } while ( (computerPoints < totalPoints) && (totalPoints <= 21));

    setTimeout(() => {
      if (computerPoints === totalPoints) {
        alert("Empates");
      }else if (totalPoints > 21 ) {
        alert("Computadora Win");
      }else if (computerPoints > 21) {
        alert("Player Win");
      }else{
        alert("Computer Win")
      }
    }, 500);


  };


 


})();