import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Logo from "../assets/svg/Gotfred_logo.svg";
import Back from "../assets/svg/Back.svg";


export default function Header (){

    let navigate = useNavigate();
    let location = useLocation();
    const [state, setState] = useState()

    useEffect(() => {
        if(location.pathname === "/"){
            setState(null)
        } else
        setState(location.pathname)
    },[location]) 

    return(
        <header>
            <div className="wrapper">
                {
                    state? 
                    <button className="back-btn" onClick={() => navigate(-1)}><img src={Back} alt="back button" /></button>
                    :
                    <div></div>
                }
                <div>
                    <NavLink to="/">
                        <img src={Logo} alt="logo" width="120"/>
                    </NavLink>
                </div>
                <Navigation />
            </div>
        </header>
    )
}