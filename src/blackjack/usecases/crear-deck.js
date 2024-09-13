import { randomDeck } from './index';

/**
 * 
 * @param {Array<string>} typeCards 
 * @param {Array<string>} especialsCards 
 * @returns {Array<string>}
 */
export const createDeck = ( typeCards, especialsCards ) => {

  if (!typeCards || typeCards.length === 0) throw new Error("TiposCartas es Obligatorio");
  if (!especialsCards || especialsCards.length <= 0) throw new Error("Debe incluri cartas especiales");
  let decks = [];

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
  
  randomDeck( decks )

  return decks;
};