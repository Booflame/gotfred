import Banner from "../Components/Banner";
import Priceitem from "../Components/Priceitem";
import kaffemaskine from "../assets/images/kaffemaskine.jpg";
import varmdrik from "../assets/images/varmdrik.jpg";
import kolddrik from "../assets/images/kolddrik.jpg";

export default function DrinksPage() {

    return (
        <>
            <Banner name="Koldt & Varmt" image="banner_kage" />
            <div className="wrapper">
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Varme drikke</h2>
                    </div>
                    <img src={kaffemaskine} alt="kaffemaskine" />
                    <p>Kaffe og kage går hånd i hånd, og derfor sørger vi for at du får den bedste kaffe som makker til din kage. Vi tilbyder friskbrygget kaffe samt andre varme drikke du kan lune dig på.</p>
                </section>
                <section className="price-section">
                    <div className="price-container">
                        <Priceitem name="Americano" price="38" />
                        <Priceitem name="Flat White" price="39" />
                        <Priceitem name="Cappuccino" price="42" />
                        <Priceitem name="Cafe Latte" price="44" />
                    </div>
                </section>
                <img style={{ marginBottom: "20px" }} src={varmdrik} alt="latteogbanoffee" />
                <section className="price-section">
                    <div className="price-container">
                        <Priceitem name="Hot Chocolate" price="42" />
                        <Priceitem name="Matcha Latte" price="46" />
                        <Priceitem name="Chai Latte" price="48" />
                    </div>
                </section>
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Kolde drikke</h2>
                    </div>
                    <img src={kolddrik} alt="aeblebrus" />
                    <p>Hos Gotfred kan du også slukke tørsten med læskende lemonader og æblebrus fra Bryggeriet Æ. Smag de lækre varianter der går som et smukt kompliment til vores søde og friske kager. </p>
                </section>
                <section className="price-section">
                    <div className="price-container">
                        <Priceitem name="Lemonade" price="30" />
                        <Priceitem name="Aeblebrus" price="30" />
                    </div>
                </section>
            </div>
        </>
    )
}