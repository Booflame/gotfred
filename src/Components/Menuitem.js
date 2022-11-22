export default function Menuitem (props){

    let image = props.image;

    if(props.image === undefined){
        image = props.name
    }

    return(
        <>
            <div className="menu-item">
                <img className="menu-item-image" src={`./assets/${image}.jpg`} alt={props.name}/>
                <h2> 
                    <span className="menu-item-description">{props.name}</span>
                    <span className="menu-item-dots"></span>
                    <span className="menu-item-price">48</span>
                </h2>
            </div>
        </>
    )
}