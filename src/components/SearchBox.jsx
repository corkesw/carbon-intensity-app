function SearchBox () {
    return (
        <section className="search">
            <form action="submit">
                <label htmlFor="postcodeInput">Postcode: </label>
                <input id="postcodeInput" type="text" required></input>
                <label htmlFor="dateInput">Date: </label>
                <input id="dateInput" type="date"></input>
                <button id="submitButton" class="button">Submit</button>
            </form>

        </section>
    )
}

export default SearchBox;