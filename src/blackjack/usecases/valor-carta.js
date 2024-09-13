/**
 * 
 * @param {string} card 
 * @returns {Number}
 */
export const getValueCard = ( card = "" ) => {
  let valueNumeric = card.substring(0, card.length - 1);
  return (isNaN(valueNumeric) ? 
        (valueNumeric == "A") ? 
        11 : 10 : valueNumeric * 1);
};