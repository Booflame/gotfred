import { useState } from "react";

export default function Orderitem (props){
    const [count, setCount] = useState(0);

    function adjustCount(amount) {
        setCount(currentCount => {
            if(currentCount === 0 && amount === -1){
                return 0
            }
            else if(currentCount === props.max && amount === +1){
                return props.max
            }
            return currentCount + amount
        })
    }
    
    let image = props.image;

    if(props.image === undefined){
        image = props.name
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