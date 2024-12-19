// Generado con Copilot
import { LocationCity, Person, Terrain } from '@mui/icons-material';
import { Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="mt-16 mx-auto text-zinc-100 items-center min-h-[60vh]">
      <Box className="text-center">
        <Typography variant="h1" className="mb-6 text-5xl font-Raleway">
          CRUD de Municipios
        </Typography>
        <Typography variant="h5" className="mb-4">
          Gestión de Municipios, Departamentos, Personas, Viviendas y Eventos
        </Typography>
        <Typography variant="body1" className="mb-8">
          Diseñado para facilitar la administración de datos de tu región
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;