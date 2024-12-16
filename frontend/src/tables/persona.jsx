import { useEffect, useState } from 'react';
import Table from './table.jsx';
import data from './data.json';

const columns = [
  {
    accessorKey: "nombre", // Match the key in the data
    header: "Nombre", // Displayed in the table header
  },
  {
    accessorKey: "telefono",
    header: "Telefono",
  },
  {
    accessorKey: "edad",
    header: "Edad",
  },
  {
    accessorKey: "sexo",
    header: "Sexo",
  },
];


const PersonaTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL + '/persona');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  },[]);

  return (
    <>
      <Table data={data} columns={columns} />
    </>
  )
}

export default PersonaTable