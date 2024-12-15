
import React from 'react';
import axios from 'axios';

//Funcion para probar la conexion con el backend
const apiCall = () => {
  axios.get('http://localhost:3001/persona').then((data) => { //data is the response from the server
    console.log(data.data);
  })
}

const App = () => {
  return (
    <>
      <div>MUNICIPIOS</div>
      <button onClick={apiCall}>Api call</button>
      <p>hola gente</p>
    </>
  )
}

export default App