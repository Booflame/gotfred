import { useState } from "react";

export default function Burger (){

    const width = 60;
    const topLine = width/2;
    const botLine = topLine/2 + topLine;
    const [classToggle, setClassToggle] = useState(false);

    function handleClick() {
        setClassToggle(!classToggle)
    }

    return(
        <>
            <button type="button" className="newburger" onClick={handleClick} aria-expanded={classToggle ? "false" : "true"}>
                <svg viewBox={`0 0 ${width} ${width}`} width={width} height={width} stroke="black">
                    <path className="line top" d={`M 0 10 h ${topLine}`}/>
                    <path className="line mid" d={`M 0 30 h ${width}`}/>
                    <path className="line bot" d={`M 0 50 h ${botLine}`}/>
                </svg>
            </button>
        </>
    )
}