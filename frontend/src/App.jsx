
import React from 'react';
import axios from 'axios';
import Header from './header.jsx';
import PersonaTable from './tables/persona.jsx';
import MunicipioTable from './tables/municipio.jsx';
import ViviendaTable from './tables/vivienda.jsx';
import EventoTable from './tables/evento.jsx';
import DepartamentoTable from './tables/departamento.jsx';
import ProyectoTable from './tables/proyecto.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


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
            element={<PersonaTable />} />
          <Route 
            path="/Municipio" 
            element={<MunicipioTable />} />
          <Route 
            path="/Vivienda" 
            element={<ViviendaTable />} />
          <Route 
            path="/Departamento" 
            element={<DepartamentoTable />} />
          <Route 
            path="/Evento" 
            element={<EventoTable />} />
          <Route 
            path="/Proyecto" 
            element={<ProyectoTable />} />
        </Routes>
      </Router>
    </>
  )
}

export default App