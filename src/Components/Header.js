import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import Logo from "../assets/images/Gotfred_logo.svg";


export default function Header (){
    return(
        <header>
            <div className="wrapper">
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