

var someVal = 2500;

function ScopedFunction(params) {
    // console.log(innerVal) // 1
    // var innerVal = 5000

    console.log(someVal) // 2 - 2500

    var someVal = 7500
    //someVal = 7500

    // innerVal = 10000
    // console.log(innerVal) // 3
}

console.log(someVal)
//console.log(innerVal)

ScopedFunction(); //global scope and global execution context



// var BaseClass = new BaseClass()
// BaseClass.ScopedFunction()

address = "Somewhere On Earth"

var Engineer = {
    name : "Van Duc",
    age : 21,
    getDetails : function () {
        return {
            Name : this.name,
            Age : this.age,
            Address : address
        }
    }
}

console.log(Engineer.getDetails())