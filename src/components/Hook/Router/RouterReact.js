
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Login from "./Login";
import { Product } from "./product";

function Menu(){

    return(
        <div className="bg-info-100">
            
                <BrowserRouter>
                    
                    <Routes>
                        <Route path="/" element={<Nav/>}>
                            <Route index  element={<Home/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/products" element={<Products/>}>
                                <Route path="/products/product" element={<Product/>}/>
                             </Route>
                            
                            <Route path="/login" element={<Login/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
        </div>
    )
  
}
export default Menu;