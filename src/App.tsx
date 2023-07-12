import axios from 'axios';
import React from 'react';

function App() { 

     async function fetch() {
      let response = await axios.get("http://localhost:8080/movies")
      console.log(response.data);
    }
    fetch();

  return (
    <div className="App">
        РАБОТАЕТ!
    </div>
  );
}

export default App;
