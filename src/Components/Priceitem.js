export default function Priceitem (props){

    return(
        <>
            <div className="price-box">
                <p className="price-box-item">{props.name}</p>
                <p className="price-box-price">{props.price}</p>
            </div>
        </>
    )
}