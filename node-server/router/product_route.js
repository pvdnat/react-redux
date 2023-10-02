//create routes / api's for user singin-up
let express = require("express");
let productRoute = express.Router();
const productDataModel = require("../data-model/productDataModel");


//localhost:9000/user/api/signinup
productRoute.post("/api/saveProduct", (req, res)=>{
    let product = req.body
    console.log(product)

    productDataModel.findOne({name:req.body.name}).then((existingProduct)=>{
        if(existingProduct) {
            console.log("Existing Product: ", existingProduct);
            res.send(existingProduct)
        } else { //user is not present go for user creation
    
            //use schema to create new user object
            let newProduct = new productDataModel(product)//req.body
            
            newProduct.save().then((newProduct)=>{//will get _id once document is created
                console.log("successful saved ", newProduct);
                res.send(newProduct)
            }).catch((err1)=>{
                console.log("err save new product", err1);
                res.send("error while save new product")
            })
        }
    }).catch((err)=>{
        console.log("err save new product", err);
        res.send("Error while Save - existing product")
    })
})


productRoute.get("/api/getProduct",(req, res)=>{
    productDataModel.find()
    .then((allProducts)=>{
        res.send(allProducts)
    })
    .catch(()=>{
        res.send("error while fetching products")
    })
})

module.exports = productRoute;