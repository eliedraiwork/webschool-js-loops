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
