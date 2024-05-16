import React from "react";
import './Menu.css';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";

import { Dashboard } from ".//dashboard";
import { About } from "./About";
import { Comment } from "./Comment";
import { Contact } from "./Contact";
import { Product } from "./Product";
import { Sidebar } from "./Sidebar";
import { SignIn } from "./SignIn";

export const Bar = () => {
    return(
        <BrowserRouter>
        <Sidebar>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/dasboard" element={<Dashboard/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/comment" element={<Comment/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/product" element={<Product/>} />
                <Route path="/signin" element={<SignIn/>} />
            </Routes>
            </Sidebar>
        </BrowserRouter>
    );
}