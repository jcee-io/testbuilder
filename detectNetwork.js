// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var indicator = cardNumber.substring(0,2);
  var indicator4 = cardNumber.substring(0,4);
  var indicator3 = cardNumber.substring(0,3);
  var indicator6 = cardNumber.substring(0,6);
  var length = cardNumber.length;
  var isDiner = length === 14 && ['38','39'].indexOf(indicator) > -1;
  var isAmEx = length === 15 && ['34','37'].indexOf(indicator) > -1;
  var isVisa = cardNumber[0] === '4' && [13, 16, 19].indexOf(length) !== -1;
  var isMaster = Number(indicator) > 50 && Number(indicator) < 56 && length === 16;
  var isDiscover = [16,19].indexOf(length) > -1 && (indicator4 === '6011' || (Number(indicator3) > 643 && Number(indicator3) < 650) || indicator === '65');
  var isMaestro = (length > 11 && length < 20) && ['5018','5020','5038','6304'].indexOf(indicator4) > -1;
  var isCUP = [16,17,18,19].indexOf(length) > -1 && ((Number(indicator6) > 622125 && Number(indicator6) < 622926)||(Number(indicator3) > 623 && Number(indicator3) < 627) || (Number(indicator4) > 6281 && Number(indicator4 < 6289))) ;
  var isSwitch = [16,17,18,19].indexOf(length) > -1 && (['4903','4905','4911','4936','6333','6759'].indexOf(indicator4) > -1 || ['564182','633110'].indexOf(indicator6) > -1);
  
  
  if(isVisa && isSwitch) return 'Switch';

  
  if(isDiner){
  	return 'Diner\'s Club';
  } else if (isAmEx){
  	return 'American Express';
  } else if (isVisa){
  	return 'Visa';
  } else if (isMaster){
  	return 'MasterCard';
  } else if (isDiscover){
  	return 'Discover';
  } else if (isMaestro){
  	return 'Maestro';
  } else if (isCUP) {
    return 'China UnionPay';
  } else if (isSwitch) {
    return 'Switch'
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};