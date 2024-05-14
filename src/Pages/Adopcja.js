import Navbar_ from "../Components/NavBar";
import Footer from "../Components/Footer";
import ShopSection from "../Components/ShopSection";
import Shop from "../Components/Shop";
import HowToAdopt from "../Components/HowToAdopt";
import React from "react";

function Adopcja(){
    return(
        <div className="App">
            <Navbar_ />
            <ShopSection/>
            <Shop/>
            <HowToAdopt/>
            <Footer/>
        </div>
    )
}

export default Adopcja