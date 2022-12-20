import BannerImage from "../assets/images/kager_banner1.png";


export default function Banner(props) {

    return (
        <>
            <div className="banner">
                <picture className="banner-img">
                    <img src={BannerImage} alt="banner" />
                </picture>
                <h1>{props.name}</h1>
            </div>
        </>
    )
}