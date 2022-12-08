import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header (){
    return(
        <header>
            <div className="wrapper flex flex-jc-sb flex-ai-fe">
                <div>
                    <NavLink to="/"><img src="/assets/logo.jpg" alt="logo"/></NavLink>
                </div>
                <Navigation />
            </div>
        </header>
    )
}