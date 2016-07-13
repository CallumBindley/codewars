
function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName , name){
  return "Hi " + otherName + ", my name is " + this.name;
}



/*
Broken Greetings [8kyu] 

Correct this code, so that the greet function returns the expected value.

  function Person(name){
    this.name = name;
  }

  Person.prototype.greet = function(otherName ){
    return "Hi " + otherName + ", my name is " + name;
  }

BUGS, OBJECT-ORIENTED PROGRAMMING

*/
