import { useLocation, useNavigate } from "react-router-dom"

export default function ConfirmPage() {

    const location = useLocation()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/Order")
    }

    return (
        <>
            <div className="wrapper">
                <section className="section-intro">
                    <div className="title-box">
                        <h1>Bestilling</h1>
                    </div>
                </section>
                <section className="order-overview-section">
                    <h2>Ordreoverblik:</h2>
                    {location.state.listOfItems.map((item, index) => (
                        <div className="order-overview-container" key={index}>
                            <p>{item.name}</p>
                            <span>x{item.amount}</span>
                        </div>
                    ))}
                    <hr />
                    <div className="order-overview-total">
                        <h3>Total:</h3>
                        <p>{location.state.price} kr.</p>
                    </div>
                </section>
                <section>
                    <form className="confirm-form" onSubmit={handleSubmit}>
                        <div>
                            <p>Har du en særlig bemærkning angående din afhentning, allergier eller andet?</p>
                            <label htmlFor="comment">Skriv din bemærkning herunder.</label>
                            <textarea id="comment" name="comment" rows="5" placeholder="Skriv din bemærkning her..."></textarea>
                            <p>Ordren kan afhentes {location.state.date} hos Gotfred Aarhus på Havnegade 4, 8000 Aarhus inden for cafeens åbningstid.</p>
                            <p>Ordren betales ved afhentning.</p>
                        </div>

                        <div className="order-button-container">
                            <button className="order-button">Bekræft & Bestil</button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}