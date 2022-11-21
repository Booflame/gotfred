import { NavLink } from "react-router-dom";

export default function Navigation (){
    return(
        <nav>
            <ul>
                <li><NavLink to="Menu">Menu</NavLink></li>
                <li><NavLink to="About">Om os</NavLink></li>
                <li><NavLink to="Contact">Kontakt os</NavLink></li>
            </ul>
        </nav>
    )
}