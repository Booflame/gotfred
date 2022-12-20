import { useEffect, useState } from "react";
import Menuitem from "../Components/Menuitem";
import Priceitem from "../Components/Priceitem";
import Banner from "../Components/Banner";
import petitemix from "../assets/images/petite-mix.jpeg"

export default function MenuPage() {

    const [items, setItems] = useState([])
    const [petiteItems, setPetiteItems] = useState([])
    const [seasonalItem, setSeasonalItem] = useState([])

    useEffect(() => {
        async function getData() {
            const url = "https://wordpress.headless-gotfred.nillermanden.dk/wp-json/wp/v2/posts?_embed&per_page=20";
            const res = await fetch(url);
            const data = await res.json();

            const seasonalData = data.filter(e => e.acf.cake_type.includes("seasonal-cake"))
            const itemData = data.filter(e => e.acf.cake_type.includes("portions-cake"))
            const PetiteItemData = data.filter(e => e.acf.cake_type.includes("petitemix-cake"))

            setItems(itemData)
            setPetiteItems(PetiteItemData)
            setSeasonalItem(seasonalData)
        }
        getData()
    }, []);

    return (
        <>
            <Banner name="Kager" />
            <div className="wrapper">
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Portionskager</h2>
                    </div>
                    <p>Vores portionskager består af seks forskellige varianter samt én sæsonkage. Vi har udviklet hver kage til at have sin helt egen unikke smag og er lavet med friske ingredienser af højeste kvalitet. </p>
                </section>
                <section className="price-section">
                    <h3>Priser</h3>
                    <div className="price-container">
                        <Priceitem name="Én kage" price="48" />
                        <Priceitem name="Kaffe & kage" price="83" />
                        <Priceitem name="Mix box 4" price="188" />
                        <Priceitem name="Mix box 6" price="280" />
                    </div>
                </section>
                <div className="limited-menu-container">
                    {seasonalItem.map((item, index) => (
                        <Menuitem name={item.acf.name} image={item.acf.image} desc={item.acf.desc} key={index} />
                    ))}
                </div>
                <div className="menu-container">
                    {items.map((item, index) => (
                        <Menuitem name={item.acf.name} image={item.acf.image} desc={item.acf.desc} key={index} />
                    ))}
                </div>
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Petite Mix</h2>
                    </div>
                    <div className="price-container">
                        <Priceitem name="Petitemix" price="145" />
                    </div>
                    <p className="intro-text">Vores petite mix gælder kun forudbestilling og består af fire mindre, men lige så lækre mundfulde. </p>
                    <img className="petitemix-img" src={petitemix} alt="petitemix" />
                    <p className="intro-text">Bestil dem i en pakke af mindst 10 og glæd dine gæster, kolleger eller familie med lidt til den søde tand. Vi anbefaler 2-3 stk. per person.</p>
                    <div className="petite-menu-container">
                        {petiteItems.map((item, index) => (
                            <Menuitem name={item.acf.name} image={item.acf.image} desc={item.acf.desc} key={index} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}