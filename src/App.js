import './App.css';
import Header from './components/Header';
import ResultsDisplay from './components/ResultsDisplay';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <ResultsDisplay />
    </div>
  );
}

export default App;
