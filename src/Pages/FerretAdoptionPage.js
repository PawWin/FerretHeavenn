import React from "react";
import FerretAbout from "../Components/FerretAbout";
import Navbar_ from "../Components/NavBar";
import FerretRescueInfo from "../Components/FerretRescueInfo";
import OtherFerrets from "../Components/OtherFerrets";
import Footer from "../Components/Footer";
import borys from "../img/borys.jpg"

function FerretAdoptionPage() {
    return (
        <div className="App">
            <Navbar_ />
            <FerretAbout img={borys} name="Borys"/>
            <FerretRescueInfo name="Borys"/>
            <OtherFerrets />
            <Footer/>
        </div>
    )
}

export default FerretAdoptionPage;