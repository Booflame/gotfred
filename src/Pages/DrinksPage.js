import Banner from "../Components/Banner";
import Priceitem from "../Components/Priceitem";
import kaffemaskine from "../assets/images/kaffemaskine.jpg";
import varmdrik from "../assets/images/varmdrik.jpg";
import kolddrik from "../assets/images/kolddrik.jpg";

export default function DrinksPage() {

    return (
        <>
            <Banner name="Koldt & Varmt" image="banner_kage" />
            <div className="big-wrapper">
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Varme drikke</h2>
                    </div>
                    <img className="full-image" src={kaffemaskine} alt="kaffemaskine" />
                    <div className="wrapper">
                        <p>Kaffe og kage går hånd i hånd, og derfor sørger vi for at du får den bedste kaffe som makker til din kage. Vi tilbyder friskbrygget kaffe samt andre varme drikke du kan lune dig på.</p>
                    </div>
                </section>
                <section className="price-section">
                    <div className="wrapper">
                        <div className="price-container">
                            <Priceitem name="Americano" price="38" />
                            <Priceitem name="Flat White" price="39" />
                            <Priceitem name="Cappuccino" price="42" />
                            <Priceitem name="Cafe Latte" price="44" />
                        </div>
                    </div>
                    <img className="full-image" src={varmdrik} alt="latteogbanoffee" />
                    <div className="wrapper">
                        <div className="price-container">
                            <Priceitem name="Hot Chocolate" price="42" />
                            <Priceitem name="Matcha Latte" price="46" />
                            <Priceitem name="Chai Latte" price="48" />
                        </div>
                    </div>
                </section>
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Kolde drikke</h2>
                    </div>
                    <img className="full-image" src={kolddrik} alt="aeblebrus" />
                    <div className="wrapper">
                        <p>Hos Gotfred kan du også slukke tørsten med læskende lemonader og æblebrus fra Bryggeriet Æ. Smag de lækre varianter der går som et smukt kompliment til vores søde og friske kager. </p>
                    </div>
                </section>
                <section className="price-section">
                    <div className="wrapper">
                        <div className="price-container">
                            <Priceitem name="Lemonade" price="30" />
                            <Priceitem name="Aeblebrus" price="30" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}