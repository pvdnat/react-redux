//use mongoose to make connection to mongodb
//get schema object created and also develop data model to be used in api
//set validations and data types in schema
//although mongodb is schema less but with mongoose we can create schema to start with
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack16 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack16"); 

let productSchema = new schemaObj({
    name : {type: String, required : true},
    price: {type: Number, required : true},
    description: String,
    rating: Number
}
// ,{
//     versionKey: false //false - set to false then it wont create in mongodb
// }
);

let productModel = mongooseObj.model("product",productSchema);//user - collection name, pluralised by mongodb

module.exports = productModel; //exported model to have access to all functions present in mongoose for select/insert/update