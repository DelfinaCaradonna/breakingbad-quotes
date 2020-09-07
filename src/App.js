import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import {Frase} from './components/Frase'
import axios from 'axios'


function App() {
  const [frase, setFrase] = useState({})

  const consultarAPI = async () => {
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
    const resultado = await axios(url)
    //console.log(resultado.data[0])
    setFrase(resultado.data[0])

}

  useEffect( ()=> {
    consultarAPI()
  }, [])

//consultarAPI()

  return (
      <div className="contenedor">
      <header className="App-header">
      </header> 

      <Frase frase={frase}/>
      <button onClick={consultarAPI}>Frase</button>
      </div>
  );
}

export default App;
