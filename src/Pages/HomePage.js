import { NavLink } from "react-router-dom";
import HomeBanner from "../Components/HomeBanner.js";
import yulekrans1 from "../assets/images/yulekrans1.png";
import julestemning from "../assets/images/julestemning.jpg";
import hpimage1 from "../assets/images/hpimage1.jpg";
import hpimage2 from "../assets/images/hpimage2.jpg";
import hpimage3 from "../assets/images/hpimage3.jpg";
import insta1 from "../assets/images/insta1.jpg";
import insta2 from "../assets/images/insta2.jpg";
import insta3 from "../assets/images/insta3.jpg";
import insta4 from "../assets/images/insta4.jpg";


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
                <div className="settingimages">
                    <img src={hpimage1} alt="cafeen"></img>
                    <img src={hpimage2} alt="portionskager"></img>
                    <img src={hpimage3} alt="baristaer"></img>
                </div>
            </div>
            <section className="season-section">
                <div className="season-bg">
                    <div>
                        <h2>Season</h2>
                        <img className="season-image" src={yulekrans1} alt="yulekrans" />
                        <h2>Yulekrans</h2>
                        <p className="season-desc">Gingerbread, vanilje pannacotta, glögg, kirsebaergel & chokolade chai creme.</p>
                    </div>
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
            <div className="wrapper">
                <section className="section-intro">
                    <div className="title-box title-box-home">
                        <h2>Besøg vores Instagram</h2>
                    </div>
                    <p>@gotfred.aarhus</p>
                    <div className="instapics-grid">
                        <img src={insta4} alt="newyear"></img>
                        <img src={insta1} alt="team"></img>
                        <img src={insta2} alt="aeblekage"></img>
                        <img src={insta3} alt="yulekrans"></img>
                    </div>
                </section>
            </div>
        </>
    )
}