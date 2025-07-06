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


//---------------------summary---------------------
//let only update
//const not updated and const obj key is updated

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
