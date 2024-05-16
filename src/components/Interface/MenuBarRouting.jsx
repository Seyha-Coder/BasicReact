
import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ContactPage } from "./ContactPage";
import View from "./View";
import { AboutPage } from "./AboutPage";
import PostJob from "./PostJobPage";

function MenuBar(){
    
    return (
        <>
            <Router>
                <View/>
                <Routes>
                    <Route path="/" element={<HomePage/>}  />
                    <Route path="/home" element={<HomePage/>}  />
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/post-job" element={<PostJob/>} />
                </Routes>
            </Router>
        </>
    )
}
export default MenuBar;