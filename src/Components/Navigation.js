import { NavLink } from "react-router-dom";

export default function Navigation (){
    return(
        <nav>
            <ul>
                <li><NavLink to="Assortment">Sortiment</NavLink></li>
                <li><NavLink to="Order">Forudbestil</NavLink></li>
            </ul>
        </nav>
    )
}