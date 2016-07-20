

function squareDigits(num){
  var exponent = 2
  var numSplit = (num + '').split('').map(Number);
  var numArray = []
  for (var i = 0; i < numSplit.length; i++) {
    var numSquare = numArray.push(Math.pow(numSplit[i],exponent));
  }
  return Number(numArray.join(''));
}


/*

Square Every Digit [7kyu]


Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
FUNDAMENTALS  MATHEMATICS ALGORITHMS  NUMBERS


//PSEUDO CODE
seperate integers
  if string convert back to integer
if exponents are possible in simplified code , use;
  else times each by itself
rejoin each number as integer

//LEGO PIECES

(num + '').split('').map(Number)
Math.pow(num,exponent)
Number(num.join(''))

//BEST SOLUTIONS

function squareDigits(num){
  return Number(('' + num).split('').map( function(val) {
    return val * val;
  }).join(''));
}

or

function squareDigits(num){
  var exponent = 2
  return Number(('' + num).split('').map( function(val) {
    return Math.pow(val,exponent);
  }).join(''));
}

or

function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

//NOTES
map calls a provided callback function once for each element in an array,
in order, and constructs a new array from the results.

so you can put a function in the map method that iterates over an array
and executes on each and have it return a new array.

*/
