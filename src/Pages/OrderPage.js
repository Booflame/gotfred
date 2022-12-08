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
                <h1>Bestilling</h1>
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