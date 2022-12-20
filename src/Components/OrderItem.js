import { useState } from "react";
import noImage from "../assets/images/no_image.png"

export default function Orderitem (props){
    let image = props.image;
    if(props.image === undefined){
        image = noImage;
    }
    
    const [count, setCount] = useState(0);

    function adjustCount(amount) {
        setCount(currentCount => {
            // Value can't go below 0
            if(currentCount === 0 && amount === -1){
                return 0
            }
            // Value can't go above the max amount
            else if(currentCount === props.max && amount === +1){
                return props.max
            }
            return currentCount + amount
        })
    }

    return(
        <>
            <div className="order-item-container">
                <img className="order-item-image" src={image} alt={props.name} />
                <div className="order-item-content">
                    <h3>{props.name}</h3>
                    <div className="order-item-amount">
                        <button className="counter-btn" type="button" onClick={(e) => {adjustCount(-1); props.clickEvent(e)}}>
                            <svg width="30" height="30"><use href="#icon-minus-circle"></use></svg>
                        </button>
                        <span>{count}</span>
                        <button className="counter-btn" type="button" onClick={(e) => {adjustCount(+1); props.clickEvent(e)}}>
                            <svg width="30" height="30"><use href="#icon-plus-circle"></use></svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}