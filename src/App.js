import "./App.css";
import Header from "./components/Header";
import ResultsDisplay from "./components/ResultsDisplay";
import SearchBox from "./components/SearchBox";
import { useState } from "react";

function App() {
  const [postcode, setPostcode] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState("");
  return (
    <div className="App">
      <Header results={results} date={date} />
      <SearchBox
        setPostcode={setPostcode}
        setResults={setResults}
        postcode={postcode}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        results={results}
        setDate={setDate}
        date={date}
      />
      <ResultsDisplay results={results} isLoading={isLoading} />
    </div>
  );
}

export default App;
