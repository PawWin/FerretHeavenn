import Navbar_ from "../Components/NavBar";
import HeroSection from "../Components/HeroSection";
import Mission from "../Components/Mission";
import Ferrets from "../Components/Ferrets";
import LastFerret from "../Components/LastFerret";
import WordsForGoogle from "../Components/WordsForGoogle";
import Footer from "../Components/Footer";
import React from "react";

function Homepage(){
    return(
        <div className="App">
            <Navbar_ />
            <HeroSection  />
            <Mission />
            <Ferrets/>
            <LastFerret/>
            <WordsForGoogle/>
            <Footer/>
        </div>
    )
}

export default Homepage;