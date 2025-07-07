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

