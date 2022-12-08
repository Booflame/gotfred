import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation (){

    const width = 40;
    const topLine = width/2;
    const botLine = topLine/2 + topLine;
    const [classToggle, setClassToggle] = useState(false)

    function handleClick() {
        setClassToggle(!classToggle)
    }

    return(
        <nav>
            <button type="button" className="newburger" onClick={handleClick} aria-expanded={classToggle ? "false" : "true"}>
                <svg viewBox={`0 0 ${width} ${width}`} width={width} height={width} stroke="var(--accent)" stroke-width="2px">
                    <path className="line top" d={`M 0 10 h ${topLine}, M 0 20 h ${width}, M 0 30 h ${botLine}`}/>
                </svg>
            </button>
            <ul className="primary-navigation" data-visible={classToggle ? "false" : "true"}>
                <li><NavLink to="/Selection">Sortiment</NavLink></li>
                <li><NavLink to="/Order">Forudbestil</NavLink></li>
            </ul>
        </nav>
    )
}