import Banner from "../Components/Banner";


export default function VendorsPage() {

    return(
        <>
            <Banner name="Leverandøre" image="banner_kage"/>
            <div className="wrapper">
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Mood Coffee</h2>
                    </div>
                    <p>Ligesom Gotfred, er Mood Coffee Roasters en virksomhed der går op i at være nede på jorden.
                        De holder deres fokus på det simple og det vigtigste - at lave god kaffe. 
                        Derfor kan du hos Gotfred opleve de forskellige subtile smagsnuancer fra Mood Coffees down-to-earth blend.
                    </p>
                    <p>Du kan lære mere om Mood Coffee Roasters på deres hjemmeside.</p>
                    <a href="https://moodcoffeeroasters.dk/">moodcoffeeroasters.dk/</a>
                </section>
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Le Lune Ceramics</h2>
                    </div>
                    <p>Når du bestiller en kaffe hos Gotfred Aarhus, får du den serveret i de smukkeste krus fra Le Lune Ceramics. 
                        Den håndlavede keramik lavet af Caroline på eget værksted, er unikke og håndmalede kreationer som kun laves i begrænset opslag.
                    </p>
                    <p>Se og lær mere om Le Lune Ceramics på deres Instagram.</p>
                    <a href="https://www.instagram.com/leluneceramics">leluneceramics instagram</a>
                </section>
                <section className="section-intro">
                    <div className="title-box">
                        <h2>Bryggeriet Æ</h2>
                    </div>
                    <p>I vores kølemontre finder du friske lemonader og æblebrus fra Bryggeriet Æ.
                        Bryggeriet Æ producerer deres moste fra fynske æbler, hvor det fynske klima og jordbunden gør æbletræer glade. Alt er lavet med ærlighed og kærlighed.
                    </p>
                    <p>Læs mere om Bryggeriet Æ, på deres hjemmeside:</p>
                    <a href="https://bryggerietae.dk/">bryggeriet æ</a>
                </section>
            </div>
        </>
    )
}