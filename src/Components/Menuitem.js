export default function Menuitem (props){

    let image = props.image;

    if(props.image === undefined){
        image = props.name
    }

    return(
        <>
            <div className="menu-item">
                <img className="menu-item-image" src={`./assets/${image}.jpg`} alt={props.name}/>
                <h2 className="menu-item-title">{props.name}</h2>
                <p className="menu-item-desc">{props.desc}</p>
            </div>
        </>
    )
}