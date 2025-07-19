//--------------------------Day 1--------------------------
// This is a simple JavaScript program that prints messages to the console
console.log("hello world");
console.log("Anoy Khan");
console.log("I love JavaScript");

/*
-------------------variable Rules--------------------   
   1. Variable names can contain letters, numbers, underscores, and dollar signs.
   2. Variable names must start with a letter, underscore, or dollar sign.
   3. Variable names are case-sensitive.
   4. Variable names cannot be a reserved keyword (like 'var', 'let', 'const', 'if', 'else', etc.).
   5. Variable names should be descriptive and meaningful.
   6. Variable names should not start with a number.
   7. Variable names should not contain spaces.
   8. Variable names should not contain special characters (except for underscores and dollar signs).
*/

//-------Variable Declaration-------
let fullName = "Anoy Khan";//camelCase
let FullName = "Anoy Khan"; //PascalCase
let full_name = "Anoy Khan"; //snake_case
let fullName1 = "Anoy Khan"; //camelCase with number
let age = 25;
x = null; // x is declared but not defined
y = undefined; // y is delcared but not defined
isfolowing = true; // boolean variable
isActive = false; // boolean variable

console.log(FullName);
console.log(age);
console.log(x);
console.log(y);
console.log(isfolowing);
console.log(isActive);

//--------let vs const vs var--------
let myName = "Anoy Khan"; // can be reassigned
// myName = "Anoy ";// This will not throw an error. 
// const myName = "Anoy Khan"; // This will throw an error because myName is already declared
// var myName = "Anoy Khan"; // This will throw an error because myName is already declared
let myAge; // can be reassigned, undefined variable

const PI = 3.14; // cannot be reassigned fixed value
// PI = 30; // This will throw an error because PI is a constant
// const PI = 30; // This will also throw an error because PI is already declared
// var PI = 30; // This will throw an error because PI is already declared
//const myCountry; // This will throw an error because myCountry is a constant and must be assigned

var myCity = "Dhaka"; // can be reassigned, function scoped 
//let myCity = "Dhaka"; // This will throw an error because myCity is already declared
//var myCity = "Dhaka"; // This will not throw an error, but it is not recommended to use var in modern JavaScript
console.log(myName);
console.log(PI);
console.log(myCity);


//--------------------block scope---------------------
{
    let a = 10;
    console.log(a); // 10, a is accessible here
}
{
    let a = 20; // a is redeclared in a different block scope
    console.log(a); // 20, a is accessible here
}

//--------------------Data Types primitive(7)---------------------
// JavaScript has 7 primitive data types: string, number, boolean, null, undefined, symbol, bigint
let myString = "Hello, World!"; // String
let myNumber = 42; // Number
let myBoolean = true; // Boolean
let myNull = null; // Null
let myUndefined; // Undefined
let mySymbol = Symbol("description"); // Symbol
let myBigInt = 123456789; // BigInt

console.log(typeof myString); // "string"
console.log(typeof myNumber); // "number"

//--------------------Data Types non-primitive(2)---------------------
// JavaScript has 2 non-primitive data types: object, array
let student = {
    name: "Anoy Khan",
    age: 25,
    cgpa: 3.75,
    isPass: true
}; // Object
console.log(student);
console.log(student.name); // Accessing object property using dot notation
console.log(student['name']); // Accessing object property using bracket notation
student.age += 1; // Incrementing age by 1
console.log(student.age); // 26
student.name = "Anoy"; // Changing name
console.log(student.name); // "Anoy"
console.log(typeof student); // "object"
console.log(typeof student.age); // "number"
console.log(typeof student['name']); // "string"


//---------------------Note---------------------
//let only update
//const is not updated and const obj key is updated

//---------------------lets practice---------------------
//qs1. Create a const object called "product" to store information.
const product = {
    name: "Ball pen",
    rating: 4.5,
    isDeal: true,
    price: 10
}; 
console.log(product);

//qs2. Create a const object called "profile" to store information.
const profile = {
    username: "Anoy Khan",
    ifFollow : true,
    message: true,
    post: 195,
    followers: 569,
    following: 4,
    bio: "I am a web developer",
};
console.log(profile);


//-----------------------Day 2-----------------------
//--------------------operators---------------------
// JavaScript has 6 types of operators: arithmetic, assignment, comparison, logical, bitwise, and ternary
// Arithmetic Operators: +, -, *, /, %, ** (exponentiation)
let a = 10;
let b = 5;
console.log("a = ", a, "& b = ", b); // a = 10, & b = 5
console.log("a + b = ",a + b); // a + b = 15
console.log("a - b = ",a - b); // a - b = 5
console.log("a * b = ",a * b); // a * b = 50
console.log("a / b = ",a / b); // a / b = 2
console.log("a % b = ",a % b); // a + b = 0
console.log("a ** b = ",a ** b); // a + b = 100000
console.log("a++ = ",a++); // a++ = 10, a is now 11
console.log("++a = ",++a); // ++a = 12, a is now 12
console.log("a-- = ",a--); // a-- = 12 // a is now 11
console.log("--a = ",--a); // --a = 10, a is now 10
// Assignment Operators: =, +=, -=, *=, /=, %=, **=
let c = 20;
console.log("c = ", c); // c = 20
c += 5; // c = c + 5
console.log("c += 5 = ", c); // c += 5 = 25
c -= 5; // c = c - 5
console.log("c -= 5 = ", c); // c -= 5 = 20
c *= 2; // c = c * 2
console.log("c *= 2 = ", c); // c *= 2 = 40
c /= 2; // c = c / 2
console.log("c /= 2 = ", c); // c /= 2 = 20
c %= 3; // c = c % 3
console.log("c %= 3 = ", c); // c %= 3 = 2
c **= 2; // c = c ** 2
console.log("c **= 2 = ", c); // c **= 2 = 4
// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
let x1 = 10;
let y1 = "10";
console.log("x1 == y1: ", x1 == y1); // true, loose equality
console.log("x1 === y1: ", x1 === y1); // false, strict equality
console.log("x1 != y1: ", x1 != y1); // false, loose inequality
console.log("x1 !== y1: ", x1 !== y1); // true, strict inequality
console.log("x1 > y1: ", x1 > y1); // false
console.log("x1 < y1: ", x1 < y1); // false
console.log("x1 >= y1: ", x1 >= y1); // true
console.log("x1 <= y1: ", x1 <= y1); // true
// Logical Operators: &&, ||, !
let a1 = true;
let b1 = false;
console.log("a1 && b1: ", a1 && b1); // false, logical AND
console.log("a1 || b1: ", a1 || b1); // // true, logical OR
console.log("!a1: ", !a1); // false // logical NOT
// Bitwise Operators: &, |, ^, ~, <<, >>
let a2 = 5; // 0101 in binary
let b2 = 3; // 0011 in binary
console.log("a2 & b2: ", a2 & b2); // 1 // 0001 in binary
console.log("a2 | b2: ", a2 | b2); // 7 // 0111 in binary
console.log("a2 ^ b2: ", a2 ^ b2); // 6 // 0110 in binary
console.log("~a2: ", ~a2); // -6 // 1010 in binary
console.log("a2 << 1: ", a2 << 1); // 10 // 1010 in binary
console.log("a2 >> 1: ", a2 >> 1); // 2 // 0010 in binary
// Ternary Operator: condition ? expr1 : expr2
let age1 = 18;
let canVote = (age1 >= 18) ? "Yes" : "No";
console.log("Can vote: ", canVote); // Can vote: Yes    

//--------------------Conditionals---------------------
// JavaScript has 3 types of conditionals: if, else if, else
let age2 = 24;
if (age2 > 18) {
    console.log("You can vote.");
}
else if (age2 === 18) {
    console.log("You are 18 years old.");
} else {
    console.log("You cannot vote.");
}

//--------------------Switch Case---------------------
// JavaScript has a switch case statement to handle multiple conditions
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
}


//---------------Pratice Seasion-----------------

//Qs1. Get user to input a number using prompt("Enter a number: ").Check if the number is a muntiple of 5 or not.

//let num = prompt("Enter a number: "); //before run please uncomment this line.
let num = 25; // for testing purpose, before run please uncomment the above line.
if( num % 5 === 0){
    console.log(num, "is a multiple of 5.");
}
else{
    console.log(num, "is NOT a multiple of 5.");
}


//Qs2. Write a code which can give grades to students according to their scores.
// The grading system is as follows:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// E: 50-59
// F: 0-49

//let score = prompt("Enter your score: "); //before run please uncomment this line.
let score = 85; // for testing purpose, before run please uncomment the above line.
if (score >= 90 && score <= 100) {
    console.log(score, "Your grade is A");
}else if (score >=80 && score <=89) {
    console.log(score, "Your grade is B");
}else if (score >=70 && score <=79) {
    console.log(score, "Your grade is C");
}else if (score >=60 && score <=69) {
    console.log(score, "Your grade is D");
}else if (score >=50 && score <=59) {
    console.log(score, "Your grade is E");
}else if (score >=0 && score <=49) {
    console.log(score, "Your grade is F");
}else{
    console.log("Invalid score");
}



//-----------------------Day 3-----------------------

//--------------------Loops---------------------
// JavaScript has 3 types of loops: for, while, do while
// For Loop: for (initialization; condition; increment/decrement)

for (let i = 0; i < 5; i++) {
    console.log("For Loop: ", i); // 0, 1, 2, 3, 4
}
// While Loop: while (condition)
let j = 0;
while (j < 5) {
    console.log("While Loop: ", j); // 0, 1, 2, 3, 4
    j++;
}
// Do While Loop: do { } while (condition)
let k = 0;
do {
    console.log("Do While Loop: ", k); // 0, 1, 2, 3, 4
    k++;
} while (k < 5);

//---------------------For In Loop---------------------
// For In Loop: for (variable in object)

let student1 = {
    name: "Anoy Khan",
    age: 25,
    cgpa: 3.75,
    isPass: true
};
for (let key in student1) {
    console.log("For In Loop: ", key, ":", student1[key]); // name: Anoy Khan, age: 25, cgpa: 3.75, isPass: true
}

//---------------------For Of Loop---------------------
// The for...of loop is used to iterate over iterable objects like arrays, strings, etc
let Fname = "AnoyKhan";
let length = 0;
for(let val of Fname){
    console.log("i = ", val); // A, n, o, y, K, h, a, n
    length++;
}
console.log("Length of Fname: ", length); // Length of Fname: 8


//---------------------Practice Seasion-----------------

//Qs1. Print all even numnbers from 0 to 100.

for(let i =0; i<=100; i++){
    if(i%2 ===0){
        console.log(i);
    }
}

//Qs2. Create a game where you start any random game number. Ask the user to keep guessing the number until the user enters correct value.

let gameNumber = 25; // Random game number
//let userGuess = prompt("guess the number: "); // User guess variable // before run please uncomment this line.
let userGuess = 25; // For testing purpose, before run please uncomment the above line

while(gameNumber != userGuess){
    userGuess = prompt("Wrong guess! Try again: "); // Ask user to guess again
}
console.log("Congratulations! You guessed the number: ",userGuess); // User guessed the correct number


//---------------------Template Literals (String) ---------------------
// Template literals are enclosed by backticks (`) and can contain placeholders for variables using ${variableName}

let obj = {
    item : "Ball Pen",
    price : 10,
}
let output = `The price of ${obj.item} is ${obj.price} tk`;
console.log(output); // The price of Ball Pen is 10 tk

let specialString = `This is a template literal ${1+2+3}`; // This is a template literal 6
console.log(specialString); // This is a template literal 6
// Template literals can also be used for multi-line strings
let multiLineString = `This is a multi-line string
It can span multiple lines
And it can contain variables like ${obj.item} and ${obj.price}`;
console.log(multiLineString);

let aa = "collage";
console.log(aa.toUpperCase()); // COLLAGE
console.log(aa.toLowerCase()); // collage
console.log(aa.trim()); // collage (removes whitespace from both ends)
console.log(aa.slice(2)); // col (extracts a section of the string). slice(start, end?)
console.log(aa.slice(0, 3)); // col (extracts a section of the string)
let srt1 = "Hello";
let srt2 = "World";
console.log(srt1.concat(" ", srt2)); // Hello World (concatenates two strings)
console.log(srt1.indexOf("l")); // 2 (returns the index of the first occurrence of a specified value)
console.log(srt1.lastIndexOf("l")); // 3 (returns the index of the last occurrence of a specified value)
console.log(srt1.includes("lo")); // true (checks if a string contains a specified value)
console.log(srt1.startsWith("He")); // true (checks if a string starts with a specified value)
console.log(srt1.endsWith("lo")); // true (checks if a string ends with a specified value)
console.log(srt1.repeat(3)); // HelloHelloHello (repeats a string a specified number of times)
console.log(srt1.split("l")); // [ 'He', '', 'o' ] (splits a string into an array of substrings)
console.log(srt1.replace("l", "L")); // HeLlo (replaces a specified value in a string with another value)
console.log(srt1.charAt(1)); // e (returns the character at a specified index)
//String immutabile

//---------------------Let's Practice---------------------

/*Qs1. Prompt the user to enter their full name. GEnerate a username for them base on the input. Start username with @, followed by their full name and ending with the fullname length.
eg: uer name = "Anoy Khan", username should be = "@AnoyKhan8"
*/
//let fullNameInput = prompt("Enter your full name: "); // before run please uncomment thisline.
let fullNameInput = "AnoyKhan"; // For testing purpose, before run please uncomment the above line
let userName = "@" + fullNameInput + fullNameInput.length; // Generate username
//let username = `@${fullNameInput.replace(/\s/g, '')}${fullNameInput.length}`; //(/\s/g, ' ') //it is a Regular expression(regex) to remove spaces from the string.
console.log("Your username is: ", userName); // Your username is: @AnoyKhan8


//----------------------Day 4----------------------
//---------------------Arrays---------------------
// JavaScript has 2 types of arrays: single-dimensional and multi-dimensional
// Single-dimensional array: an array with one level of elements
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("Fruits: ", fruits); // Fruits:  [ 'Apple', 'Banana', 'Orange', 'Mango' ]
console.log("First fruit: ", fruits[0]); // First fruit:  Apple
console.log("Last fruit: ", fruits[fruits.length - 1]); // Last fruit:  Mango
console.log("Length of fruits array: ", fruits.length); // Length of fruits array: 4
// Multi-dimensional array: an array with multiple levels of elements
let multiArray = [
    ["Apple", "Banana", "Orange"],
    ["Mango", "Pineapple", "Grapes"],
    ["Strawberry", "Blueberry", "Raspberry"]
];
console.log("Multi-dimensional array: ", multiArray); // Multi-dimensional array:  [ [ 'Apple', 'Banana', 'Orange' ], [ 'Mango', 'Pineapple', 'Grapes' ], [ 'Strawberry', 'Blueberry', 'Raspberry' ] ]
console.log("First element of first array: ", multiArray[0][0]); // First element of first array:  Apple
console.log("Last element of last array: ", multiArray[multiArray.length - 1][multiArray[multiArray.length - 1].length - 1]); // Last element of last array:  Raspberry
console.log("Length of multiArray: ", multiArray.length); // Length of multiArray: 3

for(let val of fruits){
    console.log("Fruit: ", val); // Fruit: Apple, Banana, Orange, Mango
}

//---------------------Practice Seasion---------------------

//Qs1. For a given array with marks of students -> [85,97,44,37,76,60] find the avagarge marks of the entire class.

let markes = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let mark of markes) {
    sum += mark; // sum = sum + mark
}
let average = sum / markes.length; // Calculate average
console.log(`avg marks of the class = ${average}`); // Average marks of the class: 66.5


//Qs2. For a given array with prices of 5 items -> [100, 200, 300, 400, 500] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [100, 200, 300, 400, 500];
for(let i =0; i<items.length; i++){
    let offer = items[i] / 10; // Apply 10% OFF on each item
    items[i] -= offer; // Update the item price after applying offer;
}
console.log("Final prices after applying offer: ", items); // Final prices after applying offer: [ 90, 180, 270, 360, 450 ]

//---------------------Array Methods---------------------
// JavaScript has many built-in array methods to manipulate arrays
// Array Methods: push, pop, shift, unshift, splice, slice, concat,
// forEach, map, filter, reduce, find, findIndex, includes, indexOf
// push: adds one or more elements to the end of an array and returns the new length
let arr = [1, 2, 3];
arr.push(4, 5); // Adds 4 and 5 to the end of the array
console.log("After push: ", arr); // After push: [ 1, 2, 3, 4, 5 ]
// pop: removes the last element from an array and returns that element
let lastElement = arr.pop(); // Removes the last element (5) from the array
console.log("After pop: ", arr); // After pop: [ 1, 2, 3, 4 ]
console.log("Popped element: ", lastElement); // Popped element: 5
// shift: removes the first element from an array and returns that element
let firstElement = arr.shift(); // Removes the first element (1) from the array
console.log("After shift: ", arr); // After shift: [ 2, 3, 4 ]
console.log("Shifted element: ", firstElement); // Shifted element: 1
// unshift: adds one or more elements to the beginning of an array and returns the new length
arr.unshift(0); // Adds 0 to the beginning of the array
console.log("After unshift: ", arr); // After unshift: [ 0, 2, 3, 4 ]
// splice: changes the contents of an array by removing or replacing existing elements and/or adding new elements
arr.splice(1, 2, 1, 2); // Removes 2 elements starting from index 1 and adds 1 and 2 at that position
console.log("After splice: ", arr); // After splice: [ 0, 1, 2, 4 ]
// slice: returns a shallow copy of a portion of an array into a new array object
let slicedArray = arr.slice(1, 3); // Returns a new array with elements from index 1 to index 3 (not inclusive)
console.log("Sliced array: ", slicedArray); // Sliced array: [ 1, 2 ]
// concat: merges two or more arrays and returns a new array
let arr2 = [5, 6, 7];
let concatenatedArray = arr.concat(arr2); // Merges arr and arr2 into a new array
console.log("Concatenated array: ", concatenatedArray); // Concatenated array: [ 0, 1, 2, 4, 5, 6, 7 ]
// forEach: executes a provided function once for each array element
arr.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`); // Element at index 0: 0, Element at index 1: 1, etc.
});
// map: creates a new array populated with the results of calling a provided function on every element in the calling array
let mappedArray = arr.map((element) => element * 2); // Multiplies each element by 2
console.log("Mapped array: ", mappedArray); // Mapped array: [ 0, 2, 4, 8 ]
// filter: creates a new array with all elements that pass the test implemented by the provided function
let filteredArray = arr.filter((element) => element > 1); // Filters elements greater than 1
console.log("Filtered array: ", filteredArray); // Filtered array: [ 2, 4 ]
// reduce: executes a reducer function on each element of the array, resulting in a single output value
let sum2 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sums all elements in the array
console.log("Sum of array: ", sum2); // Sum of array: 7
// find: returns the value of the first element in the array that satisfies the provided testing function
let foundElement = arr.find((element) => element > 2); // Finds the first element greater than 2
console.log("Found element: ", foundElement); // Found element: 4
// findIndex: returns the index of the first element in the array that satisfies the provided testing function
let foundIndex = arr.findIndex((element) => element > 2); // Finds the index of the first element greater than 2
console.log("Found index: ", foundIndex); // Found index: 2
// includes: determines whether an array includes a certain value among its entries, returning true or false
let includesElement = arr.includes(2); // Checks if the array includes the element 2
console.log("Array includes 2: ", includesElement); // Array includes 2: true
// indexOf: returns the first index at which a given element can be found in the array

//--------Remove Arry---------------
//pop: remove the last element from an array and returns that element
//shift: remove the first element from an array and returns that element

//-----------------Replace Array Elements-----------------
//splice: change the contents of an array by removing or replacing existing elements and/or adding new elements splice(start, deleteCount, item1, item2, ...)

//---------------- Add Array Elements ----------------
//push: add one or more elements to the end of an array and returns the new length
//unshift: add one or more elements to the beginning of an array and returns the new length



//-------------------Day 5-------------------
//---------------------Funcions---------------------
// JavaScript has 3 types of functions: function declaration, function expression, arrow function
// Function Declaration: function functionName(parameters) { body }
function greet(name) {
    console.log("Hello, " + name + "!"); // Function body
}
greet("Anoy Khan"); // Calling the function with an argument

// Function Expression: const functionName = function(parameters) { body }
const greetExpression = function(name) {
    console.log("Hello, " + name + "!"); // Function body
}
greetExpression("Anoy Khan"); // Calling the function with an argument

// Arrow Function: const functionName = (parameters) => { body }
const greetArrow = (name) => {
    console.log("Hello, " + name + "!"); // Function body
}
greetArrow("Anoy Khan"); // Calling the function with an argument

//---------------------Function Parameters and Arguments---------------------
// Function parameters are the variables listed in the function definition, while arguments are the values passed to the function when it is called
function add(a, b) {
    return a + b; // Returns the sum of a and b
}
let sum3 = add(5, 10); // Calling the function with arguments 5 and 10
console.log("Sum: ", sum3); // Sum: 15
// Function with default parameters
function multiply(a, b = 1) {
    return a * b; // Returns the product of a and b
}
let product1 = multiply(5); // Calling the function with only one argument, b will take the default value of 1
console.log("Product: ", product1); // Product: 5

const arrowSum = (a, b) => {
    console.log(a + b);
};

arrowSum(12,231);

//---------------------Practice Seasion---------------------

//Qs1. Create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string.

function countVowels(str){
    let count = 0;
    for(let char of str){
        if(
            char === 'a' || 
            char === 'e' || 
            char === 'i' || 
            char === 'o' || 
            char === 'u' ||
            char === 'A' || 
            char === 'E' || 
            char === 'I' || 
            char === 'O' || 
            char === 'U'
        ) {
            count++;
        }
    }
    console.log(count);
}
countVowels("Anoy Khan"); // 3


//Qs2. Create an arrow function to perform the same task.

const countVowelsArrow = (str) => {
    let count = 0;
    for(let char of str){
        if(
            char === 'a' || 
            char === 'e' || 
            char === 'i' || 
            char === 'o' || 
            char === 'u' || 
            char === 'A' || 
            char === 'E' || 
            char === 'I' || 
            char === 'O' || 
            char === 'U'
        ) {
            count++;
        }
    }
    console.log(count);
}
countVowelsArrow("Anoy Khan"); // 3

//---------------------forEach Loop---------------------
// The forEach() method executes a provided function once for each array element
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index) => {
    console.log(`Element at index ${index}: ${number}`); // Element at index 0: 1, Element at index 1: 2, etc.
}
); 

numbers.forEach((number) => {
    console.log("Number: ", number); // Number: 1, Number: 2, etc.
}
);
 //forEach Loop is a High Order Function (HOF) that takes a callback function as an argument and executes it for each element in the array. It does not return a new array, but rather performs an action for each element in the original array.


//---------------------Practice Seasion---------------------

//Qs1. For a given array of numbers, print the square of each value using forEach loop.

let arr3 = [1,2,3,4,5]

arr.forEach((val) =>{
    console.log(val * val);
}
);

//--------------------Map Method---------------------
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
let numbers2 = [1, 2, 3, 4, 5];

arr3.map((val) => {
    console.log(val * val);
});
// Using map to create a new array with squared values
let squaredNumbers = numbers2.map((number) => number * number); // Squares each element in the array
console.log("Squared Numbers: ", squaredNumbers); // Squared Numbers: [ 1, 4, 9, 16, 25 ]

// The map() method is also a High Order Function (HOF) that takes a callback function as an argument and returns a new array with the results of calling the callback function on each element in the original array. It does not modify the original array.

//----------------------Filter Method----------------------
// The filter() method creates a new array with all elements that pass the test implemented by the provided function
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// Using filter to create a new array with even numbers
let evenValue = numbers3.filter((val) => {
    return val % 2 === 0; // Returns true for even numbers
})
console.log("Even Values: ", evenValue); // Even Values: [ 2, 4, 6, 8, 10 ]

let evenNumbers = numbers3.filter((number) => number % 2 === 0); // Filters even numbers from the array
console.log("Even Numbers: ", evenNumbers); // Even Numbers: [ 2, 4, 6, 8, 10 ]
// The filter() method is also a High Order Function (HOF) that takes a callback function as an argument and returns a new array with the elements that pass the test implemented by the callback function. It does not modify the original array.

//----------------------Reduce Method----------------------
// The reduce() method executes a reducer function on each element of the array, resulting in a single output value

let numbers4 = [1, 2, 3, 4];
const output2 = numbers4.reduce((res, curr) => {
    return res + curr; // Sums all elements in the array
});
console.log("Sum of numbers: ", output2); // Sum of numbers: 10
// The reduce() method is also a High Order Function (HOF) that takes a callback function as an argument and returns a single output value by executing the callback function on each element in the array. It can be used to perform various operations like summation, multiplication, etc.

//----------------------Practice Seasion----------------------

//Qs1. Find out the largest number in an array using reduce method.
let numbers5 = [1, 2, 5, 3, 4];

const largestNumber = numbers5.reduce((res , curr) => {
    return res > curr ? res : curr; // Returns the larger of the two numbers
});
console.log("Largest Number: ", largestNumber); // Largest Number: 5

//Qs2. We are given array of marks of students. Filter out of the marks of students that scored 90+.

let marks = [85, 97, 44, 37, 76, 60, 90, 92];
let highScorers = marks.filter((mark) => mark > 90); // Filters marks greater than or equal to 90
console.log("High Scorers: ", highScorers); // High Scorers: [ 97, 92 ]

//Qs3. Take a number n as input from user. Create an array of numbers from 1 to n. use the reduce method to calculate sum of all numbers in the array. use the reduce method to calculate product of all numbers in the array.

//let n = prompt("Enter a number: "); // before run please uncomment this line.
let n = 5; // For testing purpose, before run please uncomment the above line
let arr4 = [];
for(let i = 1; i < n; i++) {
    arr4[i - 1] = i; // Creates an array of numbers from 1 to n
}
console.log("Array of numbers from 1 to n: ", arr4); // Array of numbers from 1 to n: [ 1, 2, 3, 4, 5 ]
let sumOfNumbers = arr4.reduce((acc, curr) => acc + curr, 0); // Calculates the sum of all numbers in the array
console.log("Sum of all numbers: ", sumOfNumbers); // Sum of all numbers: 15
let productOfNumbers = arr4.reduce((acc, curr) => acc * curr, 1); // Calculates the product of all numbers in the array
console.log("Product of all numbers: ", productOfNumbers); // Product of all numbers: 120


//----------------------Day 6----------------------
//---------------------DOM---------------------
// DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of the document. In JavaScript, we can interact with the DOM using various methods and properties
// to access and modify HTML elements, attributes, and styles.
// The DOM is a tree-like structure where each node represents an element in the HTML document.
// The root node is the document object, and each element in the HTML document is represented as a node in the tree.
// The DOM provides methods to traverse the tree, access elements, and modify their content and attributes.
// For example, we can use document.getElementById() to access an element by its ID, document.querySelector() to access an element using a CSS selector, and document.createElement() to create a new element.
// We can also use properties like innerHTML, textContent, and style to modify the content and style of elements.
// The DOM is an essential part of web development, as it allows us to create dynamic and interactive web pages by manipulating the content and structure of the document using JavaScript.
// The DOM is not a part of JavaScript, but rather a separate API that JavaScript can use to interact with HTML documents.
// The DOM is a platform- and language-neutral interface, meaning it can be used with any programming language that can manipulate HTML documents.
//---------------------Accessing DOM Elements---------------------
// There are several methods to access DOM elements in JavaScript:
// 1. document.getElementById(id): Returns the element with the specified ID.
let elementById = document.getElementById("myElement");
console.log("Element by ID: ", elementById); // Element by ID: <div id="myElement">Hello, World!</div>
// 2. document.getElementsByClassName(className): Returns a collection of elements with the specified class name.
let elementsByClassName = document.getElementsByClassName("myClass");
console.log("Elements by Class Name: ", elementsByClassName); // Elements by Class Name: HTMLCollection(2) [div.myClass, div.myClass]
console.log("First Element by Class Name: ", elementsByClassName[0]); // First Element by Class Name: <div class="myClass">Hello, World!</div>
// 3. document.getElementsByTagName(tagName): Returns a collection of elements with the specified tag name.
let elementsByTagName = document.getElementsByTagName("div");
console.log("Elements by Tag Name: ", elementsByTagName); // Elements by Tag Name: HTMLCollection(3) [div#myElement, div.myClass, div.myClass]
console.log("First Element by Tag Name: ", elementsByTagName[0]); // First Element by Tag Name: <div id="myElement">Hello, World!</div>

// 4. document.querySelector(selector): Returns the first element that matches the specified CSS selector.
let elementBySelector = document.querySelector(".myClass");
console.log("Element by Selector: ", elementBySelector); // Element by Selector: <div class="myClass">Hello, World!</div>
// 5. document.querySelectorAll(selector): Returns a collection of elements that match the specified CSS selector. 

let div = document.querySelector("div");
console.dir(div); // Displays the properties and methods of the first div element in the console

//---------------------Modifying DOM Elements---------------------
// We can modify the content, attributes, and styles of DOM elements using various properties and methods
// 1. Modifying Content: We can use innerHTML or textContent to change the content of an element.
let myElement = document.getElementById("myElement");
myElement.innerHTML = "New Content"; // Changes the inner HTML of the element
console.log("Modified Content: ", myElement.innerHTML); // Modified Content: New Content
myElement.textContent = "New Text Content"; // Changes the text content of the element
console.log("Modified Text Content: ", myElement.textContent); // Modified Text Content: New Text Content

//----------------------Pratice Seasion----------------------

//Qs1. Create a H2 heading element with text - "Hello javaScript". Append "from the DOM" to this text using js.

let h2 = document.querySelector("h2");
console.dir(h2.innerText); // Displays the text content of the h2 element in the console
h2.innerText += " from the DOM"; // Appends "from the DOM" to the existing text of the h2 element

//Qs2. Create 3 divs with common class name- "box". Access them & add some unique text to each of them.

let divs = querySelectorAll(".box"); // Selects all div elements with the class "box"
let idx = 1;
for (let div of divs) {
    div.innerText = `This is box ${idx}`; // Adds unique text to each div
    idx++;
}
 