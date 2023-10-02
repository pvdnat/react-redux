// Operators like - &&, or(||), !, =, ==, ===, <, >, >= ,<=, ++
// ternary operator - ?


var age = 18//"18"
var isValidID = true

//if (isValidID && age==18) { // == only compare data not type
if (isValidID && age===18) { // === compares data as well as type
    console.log("Is Valid Voter")
} else {
    console.log("Is Not a Valid Voter")
}

// using ternary
// condition ? when true : when false

isValidID && age===18 ? console.log("Is Valid Voter") : console.log("Is Not a Valid Voter")