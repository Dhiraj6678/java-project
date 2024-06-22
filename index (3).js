                      // Answer 1


console.log(addNumbers(5, 3));

function addNumbers(a, b) {
  return a + b;
}

                      //Answer 2

multiplyNumbers(4, 6);

function multiplyNumbers(a, b) {
  return a * b;
}



                      //Answer 3

function sumNumbers(a, b) {
  var result;
  console.log(result); // This will log 'undefined' due to hoisting
  result = a + b;
  return result;
}

console.log(sumNumbers(7, 9));




                    //Answer 5

let myVariable;
console.log(myVariable); // This will throw a ReferenceError because 'myVariable' is in the Temporal Dead Zone
myVariable = "Hello"; 

