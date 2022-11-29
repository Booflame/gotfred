import Menuitem from "../Components/Menuitem";
import Priceitem from "../Components/Priceitem";
import Banner from "../Components/Banner";

export default function MenuPage() {

    return(
        <>
            <div className="wrapper">
                <Banner image="banner_kage"/>
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Portionskager</h2>
                    </div>
                    <p>Vores portionskager består af seks forskellige varianter samt én sæsonkage. Vi har udviklet hver kage til at have sin helt egen unikke smag og er lavet med friske ingredienser af højeste kvalitet. </p>
                </section>
                <section className="price-section">
                    <h3>Priser</h3>
                    <Priceitem name="Én kage" price="48"/>
                    <Priceitem name="Kaffe & kage" price="83"/>
                    <Priceitem name="Mix box 4" price="188"/>
                    <Priceitem name="Mix box 6" price="280"/>
                </section>
                <div className="limited-menu-container">
                    <Menuitem name="yulekrans" desc="ginger bread, vanilje panna cotta, glögg og kirsebaer gel, chokolade chai creme"/>
                </div>
                <div className="menu-container">
                    <Menuitem name="gammeldags aeblekage" image="aeblekage" desc="krydret macaroon, rødt æble kompot, creme fraiche"/>
                    <Menuitem name="banoffee" desc="bastogne, saltet mælkesyltetøj, banan, passionsfrugt, flødeskum"/>
                    <Menuitem name="yuzutaerte" desc="yuzu, lime, citron, birkes"/>
                    <Menuitem name="hindbaertaerte" desc="mandel, hindbaer, hvid chokolade"/>
                    <Menuitem name="fragilité" image="fragilite" desc="hasselnoed, kaffe, nougat"/>
                    <Menuitem name="solbaerkage" desc="solbaer, lakrids, chokolade brownie"/>
                </div>
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Petite Mix</h2>
                    </div>
                    <p>Vores petite mix gælder kun forudbestilling og består af fire mindre, men lige så lækre mundfulde. </p>
                    <p>Bestil dem i en pakke af mindst 10 og glæd dine gæster, kolleger eller familie med lidt til den søde tand.</p>
                </section>
            </div>
        </>
    )
}