import React from 'react';
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
    accessorKey: "genero",
    header: "Genero",
  },
];


const PersonaTable = () => {
  return (
    <>
      <Table data={data} columns={columns} />
    </>
  )
}

export default PersonaTable