import './App.css';
import Header from './components/Header';
import ResultsDisplay from './components/ResultsDisplay';
import SearchBox from './components/SearchBox';
import {useState} from 'react';

function App() {
  const [postcode, setPostcode] = useState('')
  console.log('postcode >>>>', postcode)
  return (
    <div className="App">
      <Header />
      <SearchBox setPostcode={setPostcode}/>
      <ResultsDisplay />
    </div>
  );
}

export default App;
