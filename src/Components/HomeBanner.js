import homebanner1 from "../assets/images/homebanner1.png";

export default function HomeBanner() {

    return (
        <>
            <div className="banner">
                <picture className="banner-img">
                    <img src={homebanner1} alt="banner" />
                </picture>
            </div>
        </>
    )
}