import { useEffect, useRef, useState } from "react"
import Orderitem from "../Components/OrderItem";

export default function OrderPage() {

    // const [amounts, setAmounts] = useState[0];
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        async function getData() {
            const url = "http://wordpress.headless-gotfred.nillermanden.dk/wp-json/wp/v2/posts";
            const res = await fetch(url);
            const data = await res.json();
            setPosts(data)
        }
        getData()
    }, []);

    const countRef = useRef(null);

    const maxAmount = 10;
    const [count, setCount] = useState(0);
    const [values, setValues] = useState([])

    function adjustCount(amount, sum) {
        setCount(currentCount => {
            return currentCount + amount
        })
        setValues({...values, name: "nice", amount: sum})
    }

    return(
        <>
            <div className="wrapper">
                <h1>Bestilling</h1>
                <div>
                    <img src="" alt="test" />
                    <div>
                        <button type="button" onClick={() => adjustCount(-1, countRef.current.textContent)}>-</button>
                        <span ref={countRef}>{count}</span>
                        <button type="button" onClick={() => adjustCount(+1, countRef.current.textContent)}>+</button>
                    </div>
                </div>
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