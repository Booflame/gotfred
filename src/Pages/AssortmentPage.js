import Menuitem from '../Components/Menuitem';

export default function MenuPage() {

    return(
        <>
            <div className="wrapper">
                <h1>Vores menu</h1>
                <div className="menu-container">
                    <Menuitem name="gammeldags aeblekage" image="aeblekage"/>
                    <Menuitem name="hindbaertaerte"/>
                    <Menuitem name="yuzutaerte"/>
                    <Menuitem name="yulekrans"/>
                </div>
            </div>
        </>
    )
}