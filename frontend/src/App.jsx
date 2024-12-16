import Header from './header.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Table from './tables/Table.jsx';


//Funcion para probar la conexion con el backend

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<h1>HOLA</h1>} />
          <Route 
            path="/Persona" 
            element={<Table apiRoute="persona" />} />
          <Route 
            path="/Municipio" 
            element={<Table apiRoute="municipio" />} />
          <Route 
            path="/Vivienda" 
            element={<Table apiRoute="vivienda" />} />
          <Route 
            path="/Departamento" 
            element={<Table apiRoute="departamento" />} />
          <Route 
            path="/Evento" 
            element={<Table apiRoute="evento" />} />
          <Route 
            path="/Proyecto" 
            element={<Table apiRoute="proyecto" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App