import { Link } from "react-router-dom";

export default function SelectionPage() {

    return(
        <>
            <div className="wrapper">
                <div className="selection-wrapper">
                    <Link className="selection-link cakes" to="/Cakes">Kager</Link>
                    <Link className="selection-link drinks" to="/Drinks">Koldt & Varmt</Link>
                    <Link className="selection-link vendors" to="/Vendors">Leverandører</Link>
                </div>
            </div>
        </>
    )
}