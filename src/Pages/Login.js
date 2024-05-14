import React from "react";
import Navbar_ from "../Components/NavBar";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";

function Login() {
    return (
        <div className="App" style={{minHeight:'100%', flexGrow:1}}>
            <Navbar_/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}

export default Login;