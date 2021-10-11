import { useState } from "react";

function SearchBox ({setPostcode}) {
    
    const postcodeRegex = /^[a-z]{1,2}\d{1,2}$/i
    const [postcodeError, setPostcodeError] = useState(false)
    const [postcodeSearch, setPostcodeSearch] = useState('')

    function updatePostcode (e) {
        setPostcodeSearch(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        setPostcodeError(false)

        if (postcodeRegex.test(postcodeSearch)) {

            setPostcode(postcodeSearch) 

        } else {

            setPostcodeError(true)
        }
       

        
    }

    return (
        <section className="search">
            <form onSubmit={handleSubmit} action="submit">
                <label htmlFor="postcodeInput">Postcode: </label>
                <input id="postcodeInput" type="text" required onChange={updatePostcode} value={postcodeSearch}></input>
                <label htmlFor="dateInput">Date: </label>
                <input id="dateInput" type="date"></input>
                <button id="submitButton" className="button">Submit</button>
            </form>
            <p className={`iserror${postcodeError}`}>Please enter valid postcode</p>
        </section>
    )
}

export default SearchBox;