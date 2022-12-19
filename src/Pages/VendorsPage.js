import Banner from "../Components/Banner";
import moodcoffee from "../assets/images/moodcoffee.jpg";
import leluneceramics from "../assets/images/leluneceramics.jpg";
import bryggerietae from "../assets/images/bryggerietae.jpg";


export default function VendorsPage() {

    return (
        <>
            <Banner name="Leverandører" image="banner_kage" />
            <div className="big-wrapper">
                <div className="grid-d2">
                    <section className="section-intro">
                        <div className="title-box">
                            <h2>Mood Coffee</h2>
                        </div>
                        <img className="full-image" src={moodcoffee} alt="kaffeblend" />
                        <div className="wrapper">    
                            <p>Ligesom Gotfred, er Mood Coffee Roasters en virksomhed der går op i at være nede på jorden.
                                De holder deres fokus på det simple og det vigtigste - at lave god kaffe.
                                Derfor kan du hos Gotfred opleve de forskellige subtile smagsnuancer fra Mood Coffees down-to-earth blend.
                            </p>
                            <p>Du kan lære mere om Mood Coffee Roasters på deres hjemmeside: <a className="vendor-link" href="https://moodcoffeeroasters.dk/">moodcoffeeroasters.dk/</a></p>
                        </div>
                    </section>
                    <section className="section-intro">
                        <div className="title-box">
                            <h2>Le Lune Ceramics</h2>
                        </div>
                        <img className="full-image" src={leluneceramics} alt="keramikkop" />
                        <div className="wrapper">
                            <p>Når du bestiller en kaffe hos Gotfred Aarhus, får du den serveret i de smukkeste krus fra Le Lune Ceramics.
                                Den håndlavede keramik lavet af Caroline på eget værksted, er unikke og håndmalede kreationer som kun laves i begrænset opslag.
                            </p>
                            <p>Se og lær mere om Le Lune Ceramics på deres Instagram: <a className="vendor-link" href="https://www.instagram.com/leluneceramics">leluneceramics instagram</a></p>
                        </div>
                    </section>
                    <section className="section-intro">
                        <div className="title-box">
                            <h2>Bryggeriet Æ</h2>
                        </div>
                        <img className="full-image full-image-bottom" src={bryggerietae} alt="læskedrikke" />
                        <div className="wrapper">
                            <p>I vores kølemontre finder du friske lemonader og æblebrus fra Bryggeriet Æ.
                                Bryggeriet Æ producerer deres moste fra fynske æbler, hvor det fynske klima og jordbunden gør æbletræer glade. Alt er lavet med ærlighed og kærlighed.
                            </p>
                            <p>Læs mere om Bryggeriet Æ, på deres hjemmeside: <a className="vendor-link" href="https://bryggerietae.dk/">bryggeriet æ</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}