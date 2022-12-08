import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import Logo from "../assets/images/logo.jpg";


export default function Header (){
    return(
        <header>
            <div className="wrapper flex flex-jc-sb flex-ai-fe">
                <div>
                    <NavLink to="/"><img src={Logo} alt="logo"/></NavLink>
                </div>
                <Navigation />
            </div>
        </header>
    )
}