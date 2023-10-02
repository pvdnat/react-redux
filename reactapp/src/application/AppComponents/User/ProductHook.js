//Hook - an extract of feature that we could get from library
import React,  { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveProductToDb } from "../../../state/Products/ProducAction";

let ProductHook = (props)=>{



//useDispatch - replacement of mapDispatchToProps makes component able to dispatch the action
let dispatchToDB = useDispatch()


//initialization of default values using ref
let nameRef = useRef(null)
let priceRef = useRef(null)
let descriptionRef = useRef(null)
let ratingRef = useRef(null)

let readFormData = (evt)=>{
    let product = {
        name : nameRef.current.value,
        price : priceRef.current.value,
        description : descriptionRef.current.value,
        rating : ratingRef.current.value,
    }

    alert(JSON.stringify(product));

    dispatchToDB(saveProductToDb(product))

    evt.preventDefault()
}

return(
    <>
        <h1>Saving Product</h1>
        <form className={"form col-md-10 userHook"} onSubmit={readFormData}>                
            <label>
                <b>Product Name :</b>
                <input type="text" className={"form-control col-md-12"} ref={nameRef}
                placeholder="Please enter product name" maxLength={20} required/>
            </label>
            <br/>
            <label>
                    <b>Price :</b>
                    <input type="number" className={"form-control col-md-12"} ref={priceRef} 
                            placeholder="Please enter price" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Description :</b>
                    <input type="text" className={"form-control col-md-12"} ref={descriptionRef} 
                            placeholder="Please enter description" maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Rating :</b>
                    <input type="number" className={"form-control col-md-12"} ref={ratingRef} 
                            placeholder="Please enter rating" />
                </label>
            <br/>
                <input type="submit" className={"btn btn-primary"} value="Save Product" />

            <br/>
        </form>
    </>
)
    
}

export default ProductHook;
