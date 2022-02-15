// Concatenating Strings with Plus Equals Operator
/* Can use to concatenate a string onto the end of an existing string variable.  **Can be helpful to break a long string over several lines. */

let ourStr = "I come first. ";
ourStr += "I come second.";
// ourStr is now "I come first. I come second."



// Constructing String with Variables
/* By using the concatenation operator(+), can insert one or more variables into a string. */

const ourName = "Bob";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
// ourStr is "Hello, our name is Bob, how are you?."



// Appending Variables to Strings
/* Can also append variables to a string using the plus equals(+=) operator */

const anAdjective = "awesome";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
// ourStr would be "freeCodeCamp is awesome"



// Find the length of a String
let lastNameLength = 0;
const lastName = "Scooby";
lastNameLength = lastName.length;
// 6



// Bracket Notation to find the first character in a string
/* Bracket notation is a way to get a character at a specific index within a string.
Zero-based indexing - Starts at 0 */

const firstName = "Charles";
const firstLetter = firstName[0];
// "C"



// Understand String Immutability
// String Values are "immutable" - cannot be altered once created
let myStr = "Bob";
myStr = "Job";
// myStr is now "Job"



//Use Bracket Notation to find the Nth character in a string
const firstName = "Scooby";
const secondLetterOfFirstName = firstName[1];
// c



// Use Bracket Notation to find the last character in a string
// Get last letter of a string, can subtract one from the strings length 
const firstName = "Scooby";
const lastLetter = firstName[firstName.length - 1];
// lastLetter is y



// Use Bracket Notation to find the Nth-to-last character in string
const firstName = "Augusta";
const thirdToLast = firstName[firstName - 3];
// thirdToLast is s



// Store Multiple Values in one Variable using Arrays
/* Start array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry */
const sandwich = ["peanut butter", "jelly", 2, "bread"];



// Nest one Array within another Array
const teams = [["Packers", 12], ["Avalanche", 62]];



// Access array data with indexes
// Can access data in array using Indexes
const array = [50, 60, 70];
array[0];
const data = array[1];
// array[0] is now 50, and data has the value 60
// No space between array name and square brackets!



// Modify Array Data with Indexes
/* Unlike strings, the entries of arrays are "mutable" and can be changed freely, even if the array was declared with "const" */
const thisArray = [30, 38, 42];
thisArray[0] = 13;
// thisArray is now has value [13, 38, 42]



// Access Multi-Dimensional Arrays with Indexes
// Like an array or arrays
/* 1st set of brackets refers to the entries in outer-most array, then each additional pair of brackets refer to the next level of entries inside */
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

arr[3];
// [[10, 11, 12], 13, 14]
arr[3][0];
// [10, 11, 12]
arr[3][0][1];
// 11



// Manipulate Arrays with push() function
/* .push() takes one or more parameters and "pushes" them onto the end of the arrray */
const arr1 = [1, 2, 3];
arr1.push(4);
// [1, 2, 3, 4]

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// ["Stimpson", "J", "cat", ["happy" , "joy"]]



//  Manipulate Arrays with pop()
/* .pop() is used to pop a value off of the end of an array.  Removes the last element from an array and returns that element */

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
// 6

console.log(threeArr);
// [1, 4]



// Manipulate Arrays with shift()
// .shift() removes first element in array
const newArray = ["Homer", "J", ["dog"]];
const removedFromNewArray = newArray.shift();
// removedFromNewArray has value "Homer"
// newArray has ["J", ["dog"]]



// Manipulate Arrays with unshift()
// .unshift() adds element at the beginning of an array
const newArray = ["Homer", "J", "dog"];
newArray.shift();
// newArray has value of ["J", "dog"]

newArray.unshift("Happy");
// newArray has value ["Happy", "J", "dog"]



// Shopping List
const myList = [
    ["Chocolate Bar", 15],
    ["Milk", 1],
    ["Apples", 5],
    ["Eggs", 12],
    ["Orange Juice", 1],
  ];



// Write Reusable JavaScript with Functions
// Functions - reusable code blocks
function theFirst() {
  console.log("Hello World");
}
// To call or invoke the function:
theFirst();
// Hello World



// Passing Values to Functions with Arguments
/* Parameters are variables that act as placeholders for values that are to be input to a function when its called.

A function is typically defined along with one or more arguments.  The actual values that are input (or "passed") into a function when its called are called "arguments" */
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
  
  functionWithArgs(3, 8);
// 11



// Return a value from a function with Return
/* Pass values into a function with "arguments", "return" statement to send a value back out of a function */
function plusFive(num) {
    return num + 5;
}

const answer = plusFive(5);
// 25



// Global Scope and Functions


















































































































