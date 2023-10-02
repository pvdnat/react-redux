import React from "react";
import { NavLink, useNavigate } from "react-router-dom";//hoooks for navigations
import { connect } from "react-redux";


let Header = (props)=>{
    let userName = props.User ? props.User.userName : "Van";
    
    return(
        <>
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
             
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink>
                <NavLink to="/hook" className="button" activeclassname="success" >Save Products </NavLink>
                <NavLink to="/about" className="button" activeclassname="success" >Show Product </NavLink>
            </div>


        </>
    )
}

let mapStateToProps = (store)=>{
    return {
        User : store.productReducer.User
    }
}
export default connect(mapStateToProps, null)(Header)
//export default Header;