//Q1
let length = 10;
let width = 15;

let area = length * width;

console.log('The area of the rectangle is: ' + area);


//Q2
let celsius = 49;
let fahrenheit = 109;

let toFahrenheit = (celsius * 1.8) + 32
let toCelsius = (fahrenheit - 32) / 1.8

console.log(celsius + '°C is' +  toFahrenheit + ' °F');
console.log(fahrenheit + '°F is' +  toCelsius + ' °C');


//Q3
let hours = 2;

let seconds = 60 * 60 * 2;

console.log(hours + ' hours = ' + seconds + ' Seconds');


//Q4
let thingOne = 'My name is ';
let thingTwo = 'Yousef.';

console.log(thingOne + thingTwo);


//Q5
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;

var total = bill + tip;

console.log('Total bill: ' + total);


//Q6
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

var madLib = `The Intro to JavaScript course is ` + adjective1 + `. James and Julia are so ` + adjective2 + 
`. I cannot wait to work through the rest of this ` + adjective3 + `content!`;

console.log(madLib);


//Q7
var firstName = 'Yousef';
var interest = 'coding';
var hobby = 'watching Anime';

var awesomeMessage = `Hi, my name is ` + firstName + `. I love ` + interest + `. In my spare time, I like to ` + hobby + `.`;

console.log(awesomeMessage);