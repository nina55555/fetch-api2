
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import {Collection} from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";



export default function App() {
  return  <>
    <h1>bonjouww</h1>
    


 
 
<BrowserRouter>
<Routes>
  <Route index element= {<Home/>}/>
  <Route path= "/" element= {<Home/>}/>
  <Route path= "/Home" element= {<Home/>}/>
  <Route path= "/collection" element= {<Collection/>}/>
  <Route path= "/about" element= {<About/>}/>
  <Route path= "/contact" element= {<Contact/>}/>
  <Route path= "*" element= {<ErrorPage/>}/>
</Routes>
</BrowserRouter>
 </>
 
 

  
}