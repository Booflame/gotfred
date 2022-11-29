export default function Priceitem (props){

    return(
        <>
            <div className="price-container">
                <p className="price-container-item">{props.name}</p>
                <p className="price-container-price">{props.price}</p>
            </div>
        </>
    )
}