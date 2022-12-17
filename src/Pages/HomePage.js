import Banner_Home from "../Components/Banner_Home.js";
import texturehomeyule from "../assets/images/texturehomeyule.png";
import yulekrans1 from "../assets/images/yulekrans1.png";
import julestemning from "../assets/images/julestemning.jpg";
import { NavLink } from "react-router-dom";


export default function HomePage() {

    return (
        <>
            <Banner_Home image="homepagebanner.png" />
            <div className="wrapper">
                <section className="section-intro-home">
                    <div className="title-box-home">
                        <h2>Velkommen til Gotfred Aarhus</h2>
                    </div>
                    <p>Vi er et lille pâtisserie i Aarhus midtby, der specialiserer sig i at lave fine portionskager af højeste kvalitet. Her er autencitet og jordnærhed en del af vores identitet.</p>
                    <p id="texthome1">Besøg vores café i Havnegade, hvor der er plads til hygge og nærvær. Nyd en varm kop kaffe, en kold lemonade og giv den søde tand en oplevelse med vores speciallavede kager.</p>
                </section>
            </div >
            <section className="season">
                <div>
                    <h2 className="seasontitle">Season</h2>
                    <img className="imagebottom" src={texturehomeyule} alt="texture"></img>
                    <img className="imagetop" src={yulekrans1} alt="yulekrans"></img>
                    <h2 className="seasoncake">Yulekrans</h2>
                    <p className="seasontext">Gingerbread, vanilje pannacotta, glögg, kirsebaergel & chokolade chai creme.</p>
                    <NavLink to="/Selection">
                        <button type="button" className="btn-sortiment">Se hele vores sortiment</button>
                    </NavLink>
                    <p className="ellertxt">eller</p>
                    <NavLink to="/Order">
                        <button type="button" className="btn-bestil">Bestil vores kager nu</button>
                    </NavLink>
                    <div className="phantom">
                        <img className="stemning" src={julestemning} alt="julekagestemning"></img>
                        <div className="openinghours">
                            <p className="opentxt">Besøg vores café i Havnegade 4 i Aarhus</p>
                            <p className="opentitle">Åbningstider</p>
                            <p className="opentxt">Tirsdag-Fredag: 12:30 - 17:30</p>
                            <p className="opentxt">Weekend: 11:30-17:30</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}