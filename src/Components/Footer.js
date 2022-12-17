import kontrolrapport from "../assets/images/kontrol_rapport_green.webp";
import instagramicon from "../assets/images/instagramicon.png";

export default function Footer() {
    return (
        <footer>
            <div className="wrapper">
                <div>
                    <h3>Åbningstider</h3>
                    <p>Mandag: Lukket</p>
                    <p>Tirsdag - Fredag: 12:30 - 17:30</p>
                    <p>Weekends: 11:30 - 17:30</p>
                </div>
                <div>
                    <h3>Adresse</h3>
                    <p>Havnegade 4, 8000 Aarhus C</p>
                </div>
                <div>
                    <h3>Mail</h3>
                    <p><a href="mailto:gotfred.aarhus@outlook.dk">gotfred.aarhus@outlook.dk</a></p>
                </div>
                <h3>Instagram & Kontrolrapport</h3>
                <div className="icons">
                    <a href="https://www.instagram.com/gotfred.aarhus/"><img id="instagram-icon" src={instagramicon} alt="instagram" /></a>
                    <a href="https://www.findsmiley.dk/1221267"><img id="kontrol-icon" src={kontrolrapport} alt="kontrol rapport" /></a>
                </div>
            </div>
        </footer>
    )
}