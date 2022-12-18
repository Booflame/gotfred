import homepagebanner from "../assets/images/homepagebanner.png";

export default function HomeBanner() {

    return (
        <>
            <div className="banner">
                <picture className="banner-img">
                    <img src={homepagebanner} alt="banner" />
                </picture>
            </div>
        </>
    )
}