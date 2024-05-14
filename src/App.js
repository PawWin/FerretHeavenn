import './App.css';
import React, { useState } from 'react';
import Homepage from "./Pages/Homepage";
import Adopcja from "./Pages/Adopcja";
import FerretAdoptionPage from "./Pages/FerretAdoptionPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import {
    Routes,
    Route, HashRouter
} from "react-router-dom";
import Navbar_ from "./Components/NavBar";


function App() {
  return (
      <>
          <Routes>
              <Route path="/FerretHeavenn" element={<Homepage />} ></Route>
              <Route path="/ferrets" element={<Adopcja />} ></Route>
              <Route path="/ferrets/Borys" element={<FerretAdoptionPage />} ></Route>
              <Route path="/about" element={<About />} ></Route>
              <Route path="/kontakt" element={<Contact />} ></Route>
              <Route path="/login" element={<Login />} ></Route>
          </Routes>
      </>
  );
}


export default App;
