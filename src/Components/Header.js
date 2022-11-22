import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import Burger from "./Burger";

export default function Header (){
    return(
        <header>
            <div className="wrapper flex flex-jc-sb flex-ai-fe">
                <div>
                    <NavLink to="/"><img src="/assets/logo.jpg" alt="logo"/></NavLink>
                </div>
                <Navigation />
                <Burger />
            </div>
        </header>
    )
}