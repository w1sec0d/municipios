import Table from './table.jsx';
import data from './data.json';

const columns = [
  {
    accessorKey: "id_vivienda", // Match the key in the data
    header: "ID", // Displayed in the table header
  },
  {
    accessorKey: "MUNICIPIO_id_municipio",
    header: "Municipio",
  },
  {
    accessorKey: "direccion",
    header: "Dirección",
  },
  {
    accessorKey: "capacidad",
    header: "Capacidad",
  },
  {
    accessorKey: "niveles",
    header: "Niveles",
  },
];


const ViviendaTable = () => {
  return (
    <>
      <Table data={data} columns={columns} />
    </>
  )
}

export default ViviendaTable