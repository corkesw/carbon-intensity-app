import PieChart from "./Pie";

function ResultsDisplay({ results, isLoading }) {
  // results 0 false ----

  if (Object.keys(results).length === 0 && isLoading === false) {
    return <p></p>;
  } else if (isLoading === true) {
    return <p>isLoading!!!!</p>;
  } else if (Object.keys(results).length > 0 && isLoading === false) {
    console.log(results); // Hers is where we have the data!!!!!!!\

    const valuesArray = results.data[25].generationmix.map((value) => {
      return value.perc;
    });

    const chartInfo = {
      intensity: results.data[25].intensity.index,
      names: [
        "biomass",
        "coal",
        "imports",
        "gas",
        "nuclear",
        "other",
        "hydro",
        "solar",
        "wind",
      ],
      values: valuesArray,
    };

    const data = {
      labels: chartInfo.names,
      datasets: [
        {
          label: "Generation Mix",
          data: chartInfo.values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    console.log(chartInfo);
    return (
      <section id="resultsDisplay">
        <div id="index-banner">
          <p>Carbon intensity index: {chartInfo.intensity}</p>
        </div>
        <div>
          <PieChart data={data} />
        </div>
      </section>
    );
  } else {
    return <p>Help!</p>;
  }
}

export default ResultsDisplay;
