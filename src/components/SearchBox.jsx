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
  const [dateError, setDateError] = useState(false);
 
  function updatePostcode(e) {
    setPostcodeSearch(e.target.value);

  }

  function updateDate(e) {
    if (fullDate < e.target.value) {
      setInputDate(fullDate)
      setDateError(true)

    } else {
      setInputDate(e.target.value)
      setDateError(false);
    }
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
    console.log('useEffect', date, postcode)
    if (postcode && date) {
      setIsLoading(true);
      fetch(
        `https://api.carbonintensity.org.uk/regional/intensity/${date}T00:00Z/fw24h/postcode/${postcode}`
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {      
            setResults(result.data)
        })
        .catch((error) => {
          setResults(['error'])
          console.log(error)
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [postcode, date]);




  const mydate = new Date();
    mydate.setDate(mydate.getDate() - 1);

    const day = mydate.getDate();
    const month = ("0" + (mydate.getMonth() + 1)).slice(-2)
    const year = mydate.getFullYear();

    const fullDate = year + '-' + month + '-' + day;

  console.log(fullDate)

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
        <input onChange={updateDate} id="dateInput" type="date" value={inputDate} min="1997-01-01" max={mydate}></input>
        <button id="submitButton" className="button" disabled={dateError}>
          Submit
        </button>
      </form>
      <p className={`iserror${postcodeError}`}>Please enter valid postcode</p>
      <p className={`iserror${dateError}`}>Please enter a past date</p>
    </section>
  );
}

export default SearchBox;
