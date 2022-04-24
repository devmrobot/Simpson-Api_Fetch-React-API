import './App.css';
import QuoteCard from './components/QuoteCard';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [simpsons, setSimpsons] = useState();

  const getSimpsons = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpsons(data[0]);
      });
  };

  return (
    <div className="App">
      <QuoteCard simpsons={simpsons}/>
      <button type="button" onClick={getSimpsons}>Get Simpsons quote</button>
    </div>
  );
}

export default App;
