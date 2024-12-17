import Header from './components/header.jsx';
import Home from './components/home.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Table from './components/tables/table.jsx'; // Generado con Copilot
import ConfirmDialog from './components/ConfirmDialog.jsx';

//Funcion para probar la conexion con el backend

const App = () => {
  return (
    <>
      <ConfirmDialog />
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route 
            path="/Persona" 
            element={<Table apiRoute="personas" />} />
          <Route 
            path="/Municipio" 
            element={<Table apiRoute="municipios" />} />
          <Route 
            path="/Vivienda" 
            element={<Table apiRoute="viviendas" />} />
          <Route 
            path="/Departamento" 
            element={<Table apiRoute="departamentos" />} />
          <Route 
            path="/Evento" 
            element={<Table apiRoute="eventos" />} />
          <Route 
            path="/Proyecto" 
            element={<Table apiRoute="proyectos" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App