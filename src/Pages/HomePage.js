import { NavLink } from "react-router-dom";
import HomeBanner from "../Components/HomeBanner.js";
import yulekrans1 from "../assets/images/yulekrans1.png";
import julestemning from "../assets/images/julestemning.jpg";


export default function HomePage() {

    return (
        <>
            <HomeBanner />
            <div className="wrapper">
                <section className="section-intro">
                    <div className="title-box title-box-home">
                        <h2>Velkommen til Gotfred Aarhus</h2>
                    </div>
                    <p>Vi er et lille pâtisserie i Aarhus midtby, der specialiserer sig i at lave fine portionskager af højeste kvalitet. Her er autencitet og jordnærhed en del af vores identitet.</p>
                    <p>Besøg vores café i Havnegade, hvor der er plads til hygge og nærvær. Nyd en varm kop kaffe, en kold lemonade og giv den søde tand en oplevelse med vores speciallavede kager.</p>
                </section>
            </div >
            <section className="season-section">
                <div className="season-bg">
                    <h2>Season</h2>
                    <img className="imagetop" src={yulekrans1} alt="yulekrans" />
                    <h2>Yulekrans</h2>
                    <p className="season-desc">Gingerbread, vanilje pannacotta, glögg, kirsebaergel & chokolade chai creme.</p>
                    <div className="season-container">
                        <NavLink to="/Selection" className="season-btn">Se hele vores sortiment</NavLink>
                        <p className="">eller</p>
                        <NavLink to="/Order" className="season-btn">Bestil vores kager nu</NavLink>
                    </div>
                </div>
                <img className="stemning" src={julestemning} alt="julekagestemning"></img>
                <div className="wrapper">
                    <div className="openinghours">
                        <p className="open-txt">Besøg vores café i Havnegade 4 i Aarhus</p>
                        <p className="open-title">Åbningstider</p>
                        <p className="open-txt">Tirsdag-Fredag: 12:30 - 17:30</p>
                        <p className="open-txt">Weekend: 11:30-17:30</p>
                    </div>
                </div>
            </section>
            <div className="title-box title-box-home">
                <h2>Besøg vores Instagram</h2>
            </div>
        </>
    )
}