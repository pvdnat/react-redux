//Polymorphism : 
//1. Overloading - No concept of overloading, but overwriting with last definition
//2. Overriding - 

Print(1,2,3) // Three Params 

function Print(a) {
    console.log("One Param "+ a)
}

Print(1) // One Param 

function Print(a,b) {
    console.log("Two Params "+ a + b)
}

Print() // Error

function Print(a, b, c) {
    console.log("Three Params "+ a + b + c)
}

Print(1,2) // Two Params


