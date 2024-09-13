

export const randomDeck = ( deck = [] ) => {
    
  for (let i = 0; i < deck.length; i++) {
    let indexRand = Math.floor(Math.random() * (deck.length - i) + i);
    let support = deck[i];
    deck[i] = deck[indexRand];
    deck[indexRand] = support;
  }
};
