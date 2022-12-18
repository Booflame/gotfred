import { useLocation } from "react-router-dom"

export default function ConfirmPage() {

    const location = useLocation();

    console.log(location.state);

    return (
        <>
            <div className="wrapper">
                <h1>Bestilling</h1>
                <section className="order-overview-section">
                    <h2>Ordreoverblik:</h2>
                    {location.state[0].map((item, index) => (
                        <div className="order-overview-container" key={index}>
                            <p>{item.name}</p>
                            <span>x{item.amount}</span>
                        </div>
                    ))}
                    <hr />
                    <div className="order-overview-total">
                        <h3>Total:</h3>
                        <p>{location.state[1]} kr.</p>
                    </div>
                </section>
            </div>
        </>
    )
}