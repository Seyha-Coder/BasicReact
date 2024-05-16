// import logo from './logo.svg';
// import {NavLink,Outlet} from "react-router-dom";
// import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";
import React from "react";

import { useState } from "react";



//============> import from pages/menubars
// import { Bar } from "./pages/Menubars/Menu";
import MenuBar from "./components/Interface/MenuBarRouting";
// import View from "./components/Interface/View";
import Footer from "./components/Interface/Footer";



function App () {
  return (
     <div>
        <div>
           
           {/* <Bar/> */}
           <MenuBar/>
           <Footer/>
           {/* <View/> */}
           
           
          
        
        </div>
     </div>

  );
}

export default App;
