import { useEffect, useState } from "react"
import Orderitem from "../Components/OrderItem";

export default function OrderPage() {

    // const [amounts, setAmounts] = useState[0];
    const maxAmount = 10;
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        async function getData() {
            const url = "http://wordpress.headless-gotfred.nillermanden.dk/wp-json/wp/v2/posts?_embed&per_page=20";
            const res = await fetch(url);
            const data = await res.json();
            setPosts(data)
        }
        getData()
    }, []);

    return(
        <>
            <div className="wrapper">
                <section className="section-intro">
                    <div className="title-box">
                        <h2 className="heading-title">Bestilling</h2>
                    </div>
                    <p>Hos Gotfred Aarhus kan du bestille og afhente vores lækre portionskager samt forudbestille vores Petite Mix.</p>
                    <p>Læs hvordan herunder og bestil dine kager hurtigt og nemt.</p>
                    <ul>
                        <li>Bestilling skal ske senest dagen før.</li>
                        <li>Bestil mindst to kager - maks 30.</li>
                        <li>Afhentning af kagerne kan ske inden for caféens åbningstid.</li>
                    </ul>
                    <h3>Større bestillinger & Petite Mix</h3>
                    <p>Petite Mix bestilles I omgange af 10 styk og senest to dage før. Vi anbefaler 2-3 styk pr. person.</p>
                    <p>
                        Ved bestilling over 30 styk eller ved bestilling til større arrangementer, kontakt os venligt per mail på<a href="mailto:gotfred.aarhus@outlook.dk">gotfred.aarhus@outlook.dk</a>
                    </p>

                </section>
                <form className="pick-cake-container">
                    <h2>1. Vælg dine kager</h2>
                    {posts.map((post, index) => (
                        <Orderitem name={post.acf.name} image={post.acf.image} max={maxAmount} key={index}/>
                    ))}
                </form>
            </div>
        </>
    )
}