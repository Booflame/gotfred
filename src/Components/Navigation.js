import { NavLink } from "react-router-dom";

export default function Navigation (){
    return(
        <nav data-visible="false">
            <ul>
                <li><NavLink to="Assortment">Sortiment</NavLink></li>
                <li><NavLink to="Order">Forudbestil</NavLink></li>
            </ul>
        </nav>
    )
}