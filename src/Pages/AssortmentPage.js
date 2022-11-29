import Menuitem from "../Components/Menuitem";

export default function MenuPage() {

    return(
        <>
            <div className="wrapper">
                <div className="banner">
                    <picture className="banner-img">
                        <img src="./assets/banner_kage.jpg" alt="banner"/>
                    </picture>
                    <h1>Vores menu</h1>
                </div>
                <div className="menu-intro">
                    <h2>Portionskager</h2>
                    <p>Vores portionskager består af seks forskellige varianter samt én sæsonkage. Vi har udviklet hver kage til at have sin helt egen unikke smag og er lavet med friske ingredienser af højeste kvalitet. </p>
                </div>
                <div className="price-section">
                    <h2>Priser</h2>
                    <div className="price-container">
                        <p className="price-container-item">Én kage</p>
                        <p className="price-container-price">48</p>
                    </div>
                    <div className="price-container">
                        <p className="price-container-item">Kaffe & kage</p>
                        <p className="price-container-price">83</p>
                    </div>
                    <div className="price-container">
                        <p className="price-container-item">Mix box 4</p>
                        <p className="price-container-price">188</p>
                    </div>
                    <div className="price-container">
                        <p className="price-container-item">Mix box 6</p>
                        <p className="price-container-price">280</p>
                    </div>
                </div>
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
            </div>
        </>
    )
}