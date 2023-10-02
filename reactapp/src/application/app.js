import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./app.css"

import Header from "./CommonComponent/HeaderComponent";
import Home from "./CommonComponent/HomeComponent";
import Footer from "./CommonComponent/FooterComponent";
import ProductList from "./CommonComponent/ProductsListComponent";
import NotFound from "./CommonComponent/NotFound";
import ProductHook from "./AppComponents/User/ProductHook";


export default class Application extends Component {
        render(){
            return( 
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home />}/>
                            <Route path="/home" element={<Home />}/>
                            <Route path="/hook" element={<ProductHook />} />
                            <Route path="/about" element={<ProductList />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <Footer />
                    </Suspense>
                </Router>
            )
        }
}