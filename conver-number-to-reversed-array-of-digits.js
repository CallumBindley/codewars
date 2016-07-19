
function digitize(n) {

  var nString = n.toString().split("").reverse();
  var nArray = [];

  for (i = 0; i < nString.length; ++i) {
    nString[i] = nArray.push(parseInt(nString[i],10));
  }

  return nArray;

}

/*
Convert number to reversed array of digits [8kyu]

Given a random integer, return the integers within an array in reverse order.

Example:

348597 => [7,9,5,8,4,3]

FUNDAMENTALS  NUMBERS ARRAYS


//BEST SOLUTIONS//

function digitize(n){
  return (n + '').split('').map(Number).reverse();
}

or

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

or

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

or

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

*/
