import React from 'react';
import Table from './table.jsx';
import data from './dataMun.json';

const columns = [
  {
    accessorKey: "id_municipio", // Match the key in the data
    header: "ID", // Displayed in the table header
  },
  {
    accessorKey: "PERSONA_id_persona",
    header: "Gobernante",
  },
  {
    accessorKey: "DEPARTAMENTO_id_departamento",
    header: "Departamento",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "area",
    header: "Área",
  },
  {
    accessorKey: "presupuesto",
    header: "Presupuesto",
  },
];


const MunicipioTable = () => {
  return (
    <>
      <Table data={data} columns={columns} />
    </>
  )
}

export default MunicipioTable