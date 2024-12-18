// Generado con Copilot
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Table from './components/tables/Table.jsx';
import Home from "./components/home"
import { NotificationProvider } from './components/NotificationContext'; // Importar el proveedor de notificación
import ConfirmDialog from './components/ConfirmDialog.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NotificationProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Persona" element={<Table apiRoute="personas" />} />
            <Route path="/Municipio" element={<Table apiRoute="municipios" />} />
            <Route path="/Vivienda" element={<Table apiRoute="viviendas" />} />
            <Route path="/Departamento" element={<Table apiRoute="departamentos" />} />
            <Route path="/Evento" element={<Table apiRoute="eventos" />} />
            <Route path="/Proyecto" element={<Table apiRoute="proyectos" />} />
          </Routes>
        </Router>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;

