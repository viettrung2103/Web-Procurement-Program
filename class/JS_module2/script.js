// declare variable: let, const, var
// recommend const, let
"use strict" // check undeclar variable
/**
 *let char = "hi";
 * console.log(hi);
 * alert(hi);
 * prompt ("Who are you");
 */
// condition
let num1 = prompt("Give me the first number: ");
let num2 = prompt("Give me the second number: ");

if (num1 != num2) {
  console.log(`This ${num1} and ${num2} are not the same`);
};

let num = prompt("let check a number: ");
if (parseInt(num) % 2 == 0) {
  console.log(`The ${num} is even`);
} else {
  console.log(`The ${num} is not even`);
}