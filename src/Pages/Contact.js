import React from "react";
import Navbar_ from "../Components/NavBar";
import Footer from "../Components/Footer";
import ContactInfo from "../Components/ContactInfo";

function About() {
    return (
        <div className="App" style={{minHeight:'100%', flexGrow:1}}>
            <Navbar_/>
            <ContactInfo/>
            <Footer/>
        </div>
    )
}

export default About;