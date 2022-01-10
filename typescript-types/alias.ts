type chars = string;
let message:chars;


type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
// input = false; // Compiler error

console.log(typeof(input));
