import { useState } from "react";

export default function Burger (){

    const svg = 20;
    const [classToggle, setClassToggle] = useState(false);

    function handleClick() {
        setClassToggle(!classToggle)
    }

    return(
        <>
            <svg className={classToggle ? "newburger active" : "newburger"} onClick={handleClick} viewBox={`0 0 ${svg} ${svg}`} width={svg} height={svg} stroke="black">
                <path className="line top" d={`M 0 5 h ${svg}`}/>
                <path className="line mid" d={`M 0 10 h ${svg}`}/>
                <path className="line bot" d={`M 0 15 h ${svg}`}/>
            </svg>
        </>
    )
}