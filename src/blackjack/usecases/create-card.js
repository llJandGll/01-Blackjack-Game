
export const createCard = ( turn, card, divPlayerCards ) => {
  let img = document.createElement("img");
  img.src = `assets/poker-cards/cards/${card}.png`;
  img.classList = "card";
  divPlayerCards[turn].append(img);
};
