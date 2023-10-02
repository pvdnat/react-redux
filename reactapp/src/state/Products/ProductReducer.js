//defines the initial state for user and also returns user reducer with logic to create new user state
import * as ActionTypes from "../actionTypes";

const Initial_State = {
    Product : {
        name : "",
        price : "",
        description : "",
        rating : ""
    }
}


//write callback/ reducer to generate new state upon action change

let ProducReducer = (state = Initial_State, action)=>{
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {

        case ActionTypes.AddProductToStore:
            //...state : {User, Product ...etc}
            //returning all other states as it is but updating User using payload
            return {...state, Product : action.payload}

        default:
            return state
    }
}

export default ProducReducer;