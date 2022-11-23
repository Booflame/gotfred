import { useState } from "react";

export default function Burger (){

    const width = 20;
    const topLine = width/2;
    const botLine = topLine/2 + topLine;
    const [classToggle, setClassToggle] = useState(false);

    function handleClick() {
        setClassToggle(!classToggle)
    }

    return(
        <>
            <svg className={classToggle ? "newburger active" : "newburger"} onClick={handleClick} viewBox={`0 0 ${width} ${width}`} width={width} height={width} stroke="black">
                <path className="line top" d={`M 0 5 h ${topLine}`}/>
                <path className="line mid" d={`M 0 10 h ${width}`}/>
                <path className="line bot" d={`M 0 15 h ${botLine}`}/>
            </svg>
        </>
    )
}