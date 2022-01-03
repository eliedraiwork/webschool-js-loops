//  Challenge
//  Make a program to generate a random number
//  Then give to the user to input numbers until he guess
//  the number

const myRandomNumber = Math.floor(Math.random() * 10);
// console.log(myRandomNumber);

let myGuess;
do {
	myGuess = parseInt(prompt('Guess a number between 0 and 9'));
} while (myGuess !== myRandomNumber);

alert('You won the game!');
//=================================================================

//  Exercice 06
// Write a JavaScript program to capitalize the first letter of each word in a string.
// The user must input a string and the program should display its result in the console.
// For example: 'js string exercises' → "Js String Exercises"

//  User input
let sentence = prompt('Enter a sentence:'); // 'hello my name is david'

//  split the string into words (according to space)
let words = sentence.split(' '); // ['hello', 'my', 'name', 'is', 'david']

for (let index = 0; index < words.length; index++) {
	let firstCharacter = words[index][0];
	firstCharacter = firstCharacter.toUpperCase();
	let stringRest = words[index].slice(1);

	words[index] = firstCharacter + stringRest;
}

alert(words.join(' '));

//=================================================================

//  Exercice 07
//  The user input a word and a number.
//  The program must display the word repeated according to the number specified

const word = prompt('Enter a word:');
let number = parseInt(prompt('Enter a number'));

let newWord = '';
while (number > 0) {
	newWord += ' ' + word;
	number = number - 1;
}

alert(newWord);

//================================================================

// Exercise 8
// let x = prompt("enter first number");
// let chr;
// for (i = 1; i <= x; i++) {
//   for (j = 1; j < i; j++) {
//     chr = chr + "*";
//   }
//   console.log(chr);
//   chr = "";
// }

// Exercise 9
// let number = parseInt(prompt("Enter an integer: "));
// for (let i = 1; i <= 10; i++) {
//   let result = i * number;
// console.log(`${number} * ${i} = ${result}`);
// }

// Exercise 10
// let First_number = parseInt(prompt("enter First number: "));
// let Second_number = parseInt(prompt("enter Second number: "));
// for (let i = 1; i <= Second_number; i++) {
//   let result = i * First_number;
//   console.log(`${First_number} * ${i} = ${result}`);
// }

// Exercise 11

// let x = prompt("enter First number");
// let y = prompt("enter Second number");
// let res = 1;
// for (let i = 0; i < y; i++) {
//   res = res * x;
// }
// console.log(res);
