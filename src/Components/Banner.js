export default function Banner (props){

    let image = props.image;

    if(props.image === undefined){
        image = "banner_kage"
    }

    return(
        <>
            <div className="banner">
                <picture className="banner-img">
                    <img src={`./assets/${image}.jpg`}  alt="banner"/>
                </picture>
                <h1>{props.name}</h1>
            </div>
        </>
    )
}