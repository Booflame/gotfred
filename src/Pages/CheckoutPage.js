export default function ContactPage() {

    return (
        <>
            <div className="wrapper">
                <h1>Kontakt os</h1>

                <form>
                    <div className="flexc">
                        <label htmlFor="email">Din email</label>
                        <input type="email" />
                    </div>
                    <div className="flexc">
                        <label htmlFor="name">Dit navn</label>
                        <input type="text" />
                    </div>
                    <div className="flexc">
                        <label>Virksomhed</label>
                        <input type="text" />
                    </div>
                    <div className="flexc">
                        <label>Afhentning</label>
                        <input type="date" value="2022-11-23" min="2022-11-23" max="2022-12-07" />
                    </div>
                    <div className="flexc">
                        <h2>Hvad skal du bestille?</h2>
                        <div className="flex gap-100">
                            <div className="radio-wrapper">
                                <input type="radio" id="mixbox4" name="kager" value="Mix box 4" />
                                <label className='radio-label' htmlFor="mixbox4">Mix box 4</label>
                            </div>
                            <div className="radio-wrapper">
                                <input type="radio" id="mixbox6" name="kager" value="Mix box 6" />
                                <label className='radio-label' htmlFor="mixbox6">Mix box 6</label>
                            </div>
                            <div className="radio-wrapper">
                                <input type="radio" id="mixbox8" name="kager" value="Mix box 8" />
                                <label className='radio-label' htmlFor="mixbox8">Mix box 8</label>
                            </div>
                            <div className="radio-wrapper">
                                <input type="radio" id="mixbox10" name="kager" value="Mix box 10" />
                                <label className='radio-label' htmlFor="mixbox10">Mix box 10</label>
                            </div>
                            <div className="radio-wrapper">
                                <input type="radio" id="petitemix" name="kager" value="Petite mix" />
                                <label className='radio-label' htmlFor="petitemix">Petite mix</label>
                            </div>
                        </div>
                    </div>
                    <div className="flexc">
                        <label>Kommentar</label>
                        <textarea rows="6" />
                    </div>
                    <button>Bestil</button>
                </form>
            </div>
        </>
    )
}