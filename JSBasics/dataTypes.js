// DataTypes are storage type to store various types of data like - int, char, string, bool etc

//We've 6 data types in javascript as below
// String, Number, Boolean, Undefined, Null, Object

// in ES6 above we can have Symbol as data

var checkDataType = 1.256 // decimal
console.log("Data type is - "+ typeof checkDataType)
console.log("Data is - ", checkDataType)

checkDataType = 1256 // integer
console.log("Data type is - "+ typeof checkDataType)
console.log("Data is - ", checkDataType)

checkDataType = "Ryan" // string
console.log("Data type is - "+ typeof checkDataType)
console.log("Data is - ", checkDataType)

checkDataType = true // boolean
console.log("Data type is - "+ typeof checkDataType)
console.log("Data is - ", checkDataType)

checkDataType = undefined // is a valid data type
console.log("Data type is - "+ typeof checkDataType)
console.log("Data is - ", checkDataType)

checkDataType = null // a valid value, datatype is object as null is just nothing so default dataype is assigned to it
console.log("Data type is - "+ typeof checkDataType)
console.log("Data is - ", checkDataType)

checkDataType = {} // {} - json object or object
console.log("Data type is - "+ typeof checkDataType)
console.log("Data is - ", checkDataType)

checkDataType = {
    name : "Arit",
    session : 'MernStack'
} // {} - json object or object
console.log("Data type is - "+ typeof checkDataType)
console.log("Data is - ", checkDataType)

console.log("Data is - "+ JSON.stringify(checkDataType)) // + someValue.toString()



//ES6 has new data type - symbol

var mydata = Symbol("Some Value")

console.log("Data type is - "+ typeof mydata)
console.log("Data is - ", mydata)