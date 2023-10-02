//Compiled + Interpreted ==> (-- Hoisting --)

// Case Sensetive

var myName = "Van Luc"
var MyName = "David"

console.log(myName)
console.log(MyName)

// semicolons ; are optional

// single line comment - ctrl+/  (can be to toggled)

// Test

// Multi line comment - 
/*
 Test
*/

// Declaring Identifiers 
// string, alphanumeric
// can not start with number

var session1, session2;
//var 3session //not allowed

// $ and _ can be used as special chars
var _$session_2 = "variable declaration"

// it is untyped language - assign any data type an identifier

var number_of_sessions = true //5 //"Five"

console.log(number_of_sessions)

// It is dynamic casting enabled or auto casting

number_of_sessions = 1000

console.log(number_of_sessions)