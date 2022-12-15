export default function ConfirmPage() {

    return(
        <>
            <div className="wrapper">
                <h1>Bestilling</h1>
                <section className="order-overview-section">
                    <h2>Orderoverblik:</h2>
                    <div className="order-overview-container">
                        <p>Hindbaer taerte</p>
                        <span>x3</span>
                    </div>
                    <div className="order-overview-container">
                        <p>Yuzu taerte</p>
                        <span>x3</span>
                    </div>
                    <div className="order-overview-container">
                        <p>Gammeldags aeblekage</p>
                        <span>x4</span>
                    </div>
                    <hr />
                    <div className="order-overview-total">
                        <h3>Total:</h3>
                        <p>466 kr.</p>
                    </div>
                </section>
            </div>
        </>
    )
}