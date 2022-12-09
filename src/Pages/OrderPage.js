import { useEffect, useState } from "react"
import Orderitem from "../Components/OrderItem";

export default function OrderPage() {

    const maxAmount = 10;
    const [posts, setPosts] = useState([]);
    const [amount, setAmount] = useState([]);

    useEffect(() =>{
        async function getData() {
            const url = "http://wordpress.headless-gotfred.nillermanden.dk/wp-json/wp/v2/posts?_embed&per_page=20";
            const res = await fetch(url);
            const data = await res.json();
            setPosts(data)
        }
        getData();

        console.log(amount)
    }, [amount]);

    function handleclick() {
        setAmount(
            {
                name: "knud",
                amount: 23
            }
        )
    }

    return(
        <>
            <div className="wrapper">
                <section className="section-intro">
                    <div className="title-box">
                        <h2 className="heading-title">Bestilling</h2>
                    </div>
                    <p>Hos Gotfred Aarhus kan du bestille og afhente vores lækre portionskager samt forudbestille vores Petite Mix.</p>
                    <p>Læs hvordan herunder og bestil dine kager hurtigt og nemt.</p>
                    <ul className="order-list">
                        <li>Bestilling skal ske senest dagen før.</li>
                        <li>Bestil mindst to kager - maks 30.</li>
                        <li>Afhentning af kagerne kan ske inden for caféens åbningstid.</li>
                    </ul>
                    <h3>Større bestillinger & Petite Mix</h3>
                    <p>Petite Mix bestilles I omgange af 10 styk og senest to dage før. Vi anbefaler 2-3 styk pr. person.</p>
                    <p>
                        Ved bestilling over 30 styk eller ved bestilling til større arrangementer, kontakt os venligt per mail på <a href="mailto:gotfred.aarhus@outlook.dk">gotfred.aarhus@outlook.dk</a>
                    </p>

                </section>
                <form className="pick-cake-container">
                    <h2>1. Vælg dine kager</h2>
                    {posts.map((post, index) => (
                        <Orderitem name={post.acf.name} image={post.acf.image} max={maxAmount} key={index} clickEvent={(e) => handleclick(e)}/>
                    ))}
                </form>
                <section>
                    <h2>2. Vælg dato for afhenting</h2>
                    <input type="date"/>
                    <h3>Valgt afgentinsdato:</h3>
                    <p>dag måned år</p>
                </section>
                <section>
                    <h2>Orderoverblik:</h2>
                    <div>
                        <p>Hindbaer taerte</p>
                        <span>x2</span>
                    </div>
                    <div>
                        <p>Yuzu taerte</p>
                        <span>x3</span>
                    </div>
                    <div>
                        <p>Gammeldags aeblekage</p>
                        <span>x4</span>
                    </div>
                </section>
            </div>
        </>
    )
}