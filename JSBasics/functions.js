//Function : JS is functional programming language and its power lies in the spirits of functions or variations of functions
//As most of the essential features are built through functions so it is termed as - first class member citizens

//keyword - name of the function - paranthesis - parameters - definition of the function
//function name(params) { 
// function definition
//}

//pure functions - it should always return a value

//1. Named Function
function PrintSum(a, b) 
{
    //return a + b
}
console.log(PrintSum(5, 9))
PrintSum(15, 19)
PrintSum(25, 29)

//2. Function Expression

var DoSum = function Func(c, d) {
    return c + d
}

console.log(DoSum(5, 9));

//3. Immediately Invocable Function Expression

(function IIFE(params) {
    console.log(params)
})("Van Duc")

//IIFE("Jeffrey") - as soon as execution is done IIFE will not be accessible again

//4. Constructor Function - used as class object

function Vehicle(numofSeats, numOfAirbags) {
    this.Seats = numofSeats
    this.Airbags = numOfAirbags

    this.GetDetails = function () {
        return {
            "Seats" : this.Seats,
            "Airbags" : this.Airbags
        }
    }
}

var vehObj = new Vehicle(6, 5);

console.log(vehObj.GetDetails())

//5. Nested Function

function Login(params) {
    
    function AuthenticateUser(params) {
        
        function AuthorizeUser(params) {
            
            function CreateSession(params) {
                
                function NavigateUser(params) {
                    
                }
            }    
        }    
    }
}