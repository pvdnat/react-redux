//this defines all the actions raised for user state like - adduserToStore, signinupUser, etc
import productList from "../../application/CommonComponent/ProductsListComponent";
import * as ActionTypes from "../actionTypes"
import axios from "axios";

export const AddProductToStore = (newProduct)=>{
    return {
        type : ActionTypes.AddProductToStore,
        payload : newProduct
    }
}


export const saveProductToDb = (product)=>{
     // thunk - makes it behave synchronously
     return (dispatch)=>{
        // here we go with ajax call : to save data to the server or fetch it from the server
        // using fetch method of react
        console.log("called by dispatch and synced by thunk");
        //dispatch(loading(true)); //Jquery - ajax
        axios.post("http://localhost:9000/user/api/saveProduct",//uri or end point of singninup api
            product //passing into the body req.body
            )
            .then((savedProduct)=>{
                let product = savedProduct.data;
                console.log(product)

                dispatch(AddProductToStore(product))
            })
            .catch((err)=>{
                console.log(err)
            })
     }
}

export const getProducts = (products)=>{
    return (dispatch)=>{
        axios.get("http://localhost:9000/user/api/getProduct",
        products
        ).then((productList)=>{
            let products = productList.data;
            console.log(products)
            dispatch(AddProductToStore(products))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}