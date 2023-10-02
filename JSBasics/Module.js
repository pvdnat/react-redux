//Every file in javacript is termed as a module, it could be a single statement or function or a complete application

var User = {
    name : "MeheJabeen",
    address : "Somewhere on earth",
    sessionTraining : "MERNSTack",
    getUserInfo : function () {
        return { 
            name : this.name,//this is - context or execution context or scope in which function executes
            session : this.sessionTraining
        }
    }
}

var aConstant = 3.1413

//console.log(User.getUserInfo());

// var exportObject = {
//     User, //User : User, //short hand will keep only one of them if we have key and the variable name that contains value are same
//     aConstant //aConstant : aConstant
// }

var User2 = {
    name : "MeheJabeen",
    address : "Somewhere on earth",
    sessionTraining : "MERNSTack",
    getUserInfo : function () {
        return { 
            name : this.name,//this is - context or execution context or scope in which function executes
            session : this.sessionTraining
        }
    }
}

//module.exports = User;
//module.exports = exportObject

module.exports = { User, User2, aConstant }