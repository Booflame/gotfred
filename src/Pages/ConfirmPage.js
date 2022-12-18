import { useLocation, useNavigate } from "react-router-dom"

export default function ConfirmPage() {

    const location = useLocation()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/")
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
                            <p className="form-desc">Har du en særlig bemærkning angående din afhentning, allergier eller andet?</p>
                            <label htmlFor="comment">Skriv din bemærkning herunder.</label>
                            <textarea id="comment" name="comment" rows="5" placeholder="Skriv din bemærkning her..."></textarea>
                            <p className="form-desc">Ordren kan afhentes {location.state.date} hos Gotfred Aarhus på Havnegade 4, 8000 Aarhus inden for cafeens åbningstid.</p>
                            <p className="form-desc">Ordren betales ved afhentning.</p>
                        </div>
                        <div>
                            <h2>Dine Oplysninger:</h2>
                            <div>
                                <label htmlFor="name">Dit navn og/eller virksomhed</label>
                                <input id="name" name="name" type="text" placeholder="Dit navn og/eller virksomhed..." />
                            </div>
                            <div>
                                <label htmlFor="email">Din email</label>
                                <input id="email" name="email" type="email" placeholder="Din email..." />
                            </div>
                            <p className="form-desc">Du modtager en bekræftelse per e-mail når din bestilling er modtaget, samt når vi har gennemset og bekræftet din ordre.</p>
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