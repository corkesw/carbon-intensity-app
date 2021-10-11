function ResultsDisplay({ results, isLoading }) {
  if (isLoading) {
    return <p>....Loading</p>;
  } else {
    console.log(results);
    return <section className="resultdisplay"></section>;
  }
}

export default ResultsDisplay;
