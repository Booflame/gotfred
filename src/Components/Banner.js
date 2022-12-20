import BannerImage from "../assets/images/banner_img.png";

export default function Banner(props) {

    let image = BannerImage

    if(props.image){
        image = props.image;
    }

    return (
        <>
            <div className="banner">
                <picture className="banner-img">
                    <img src={image} alt="banner" />
                </picture>
                <h1>{props.name}</h1>
            </div>
        </>
    )
}