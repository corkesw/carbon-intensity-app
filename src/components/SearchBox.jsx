import { useState, useEffect } from "react";

function SearchBox({
  setPostcode,
  postcode,
  setResults,
  setIsLoading,
  date,
  setDate,
}) {
  const [inputDate, setInputDate] = useState("");
  const postcodeRegex = /^[a-z]{1,2}\d{1,2}$/i;
  const [postcodeError, setPostcodeError] = useState(false);
  const [postcodeSearch, setPostcodeSearch] = useState("");

  function updatePostcode(e) {
    setPostcodeSearch(e.target.value);
  }

  function updateDate(e) {
    setInputDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPostcodeError(false);
    if (postcodeRegex.test(postcodeSearch)) {
      setPostcode(postcodeSearch);
      setDate(inputDate);
    } else {
      setPostcodeError(true);
    }
    setPostcodeSearch("");
    setInputDate("");
  }

  useEffect(() => {
    if (postcode) {
      setIsLoading(true);
      fetch(
        `https://api.carbonintensity.org.uk/regional/intensity/${date}T00:00Z/fw24h/postcode/${postcode}`
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setResults(result.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [postcode]);

  return (
    <section className="search">
      <form onSubmit={handleSubmit} action="submit">
        <label htmlFor="postcodeInput">Postcode: </label>
        <input
          id="postcodeInput"
          type="text"
          required
          onChange={updatePostcode}
          value={postcodeSearch}
        ></input>
        <label htmlFor="dateInput">Date: </label>
        <input onChange={updateDate} id="dateInput" type="date"></input>
        <button id="submitButton" className="button">
          Submit
        </button>
      </form>
      <p className={`iserror${postcodeError}`}>Please enter valid postcode</p>
    </section>
  );
}

export default SearchBox;
