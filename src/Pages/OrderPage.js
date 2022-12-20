import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Orderitem from "../Components/OrderItem";
import PetitemixImage from "../assets/images/petite-mix.jpeg"

export default function OrderPage() {

    const navigate = useNavigate();
    const maxAmount = 10;

    const [items, setItems] = useState([]);
    const [listOfItems, setListOfItems] = useState([]);
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState("");

    useEffect(() => {
        async function getData() {
            const url = "http://wordpress.headless-gotfred.nillermanden.dk/wp-json/wp/v2/posts?_embed&per_page=20";
            const res = await fetch(url);
            const data = await res.json();

            const itemData = data.filter(e => !e.acf.cake_type.includes("petitemix"));

            setItems(itemData);
        }
        getData();
    }, []);

    async function handleclick(e) {
        const quantity = e.target.parentElement.children[1].textContent;
        const itemName = e.target.parentElement.parentElement.children[0].textContent;
        let updatedList = [...listOfItems];
        const index = updatedList.findIndex(o => o.name === itemName);

        // If the name of the object is not in the list, create a new object to the list
        if (index === -1) {
            setListOfItems(updatedList = [...listOfItems, { name: itemName, amount: quantity }])
            // Else it just update the amount of the object
        } else {
            updatedList[index].amount = quantity;
            setListOfItems(updatedList)
        }

        // Looping through all objects that is not the petitemix and add all the amounts to one number
        const totalSum = listOfItems.reduce((acc, obj) => {
            if (obj.name === "petitemix") {
                return acc += 0;
            }
            const num = parseInt(obj.amount);
            return acc += num;
        }, 0)

        const cakePrice = 48 * totalSum;
        let petitemixPrice = 0;

        if (listOfItems.find((obj) => obj.name === "petitemix")) {
            petitemixPrice = 145 * parseInt(listOfItems.find((obj) => obj.name === "petitemix").amount);
        }

        const newPrice = cakePrice + petitemixPrice;
        setPrice(newPrice);
    }

    function handleChange(e) {
        setDate(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/Confirm", {
            state: {
                listOfItems: listOfItems,
                price: price,
                date: date
            }

        })
    }

    return (
        <>
            <section className="section-intro">
                <div className="title-box">
                    <h2 className="heading-title">Bestilling</h2>
                </div>
                <div className="wrapper">
                    <p>Hos Gotfred Aarhus kan du bestille og afhente vores lækre portionskager samt forudbestille vores Petite Mix.</p>
                    <p>Læs hvordan herunder og bestil dine kager hurtigt og nemt.</p>
                    <div className="grid-d2">
                        <div>
                            <h3>Bestillingskrav</h3>
                            <ul className="order-list">
                                <li>Bestilling skal ske senest dagen før.</li>
                                <li>Bestil mindst to kager - maks 30.</li>
                                <li>Afhentning af kagerne kan ske inden for caféens åbningstid.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Større bestillinger & Petite Mix</h3>
                            <p>Petite Mix bestilles I omgange af 10 styk og senest to dage før. Vi anbefaler 2-3 styk pr. person.</p>
                            <p>
                                Ved bestilling over 30 styk eller ved bestilling til større arrangementer, kontakt os venligt per mail på <a href="mailto:gotfred.aarhus@outlook.dk">gotfred.aarhus@outlook.dk</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <form onSubmit={handleSubmit} className="">
                <div className="order-texture">
                    <div className="wrapper">
                        <section className="pick-cake-container">
                            <h2>1. Vælg dine kager</h2>
                            <div className="order_texture">
                                {items.map((item, index) => (
                                    <Orderitem name={item.acf.name} image={item.acf.order_image ? item.acf.order_image : item.acf.image} max={maxAmount} key={index} clickEvent={(e) => handleclick(e)} />
                                ))}
                                <Orderitem name="petitemix" image={PetitemixImage} max={5} clickEvent={(e) => handleclick(e)} />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="wrapper">
                    <section>
                        <h2>2. Vælg dato for afhenting</h2>
                        <input onChange={(e) => handleChange(e)} type="date" />
                        <h3>Valgt afhentningsdato:</h3>
                        <p>dag måned år</p>
                    </section>
                    <section className="order-overview-section">
                        <h2>Ordreoverblik:</h2>
                        {listOfItems.map((item, index) => (
                            <div className="order-overview-container" key={index}>
                                <p>{item.name}</p>
                                {
                                    item.name === "petitemix" ?
                                        <span>145 kr. x {item.amount}</span>
                                        :
                                        <span>48 kr. x {item.amount}</span>
                                }
                            </div>
                        ))}
                        <hr />
                        <div className="order-overview-total">
                            <h3>Total:</h3>
                            <p>{price} kr.</p>
                        </div>
                    </section>
                    <div className="order-button-container">
                        <button className="order-button">Næste</button>
                    </div>
                </div>
            </form>
        </>
    )
}