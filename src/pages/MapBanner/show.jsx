import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Map from "./map";
function Show(){

    return(
        <>
            <Router>
                <Routes>
                    <Route index element={<Map/>}></Route>
                </Routes>
            </Router>
        </>
    );
}
export default Show;