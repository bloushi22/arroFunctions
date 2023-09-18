// Q1)Rewrite the following function as an arrow function:
/**
    function greet(name) {
      return Hello, ${name}!;
    }
**/
const greet = (name) => `Hello, ${name}!`;

console.log(greet("hasan"));
// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const num = (par1 ,par2) => par1 + par2;

// Q3) Write a simple arrow function that squares a number.

const squareNum =(num) => num * num;

// Q4) [] Create an arrow function that takes an array of numbers 
// and returns a new array with each number squared.

const squareNumbers = (arr) => arr.map((number) => number ** 2);
const numbers =[1 ,2 ,3 ,4 ,5];
const squaredNumbers =squareNumbers(numbers);
console.log(squaredNumbers);