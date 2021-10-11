function ResultsDisplay({ results, isLoading }) {

    // results 0 false ---- 

    if (Object.keys(results).length === 0 && isLoading === false) {
        return <p>Hello</p>
    } else if (isLoading === true) {
        return <p>isLoading!!!!</p>
    } else if 
    (Object.keys(results).length > 0 && isLoading === false) {
        console.log(results.data[25].generationmix) // Hers is where we have the data!!!!!!!
        return <p>got some results!</p>
    } else {
       
    return <p>Help!</p>
    }

}

export default ResultsDisplay;
