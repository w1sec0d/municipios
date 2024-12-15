import Table from './table.jsx';
import data from './data.json';

const columns = [
  {
    accessorKey: "id_departamento", // Match the key in the data
    header: "ID", // Displayed in the table header
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
    accessorKey: "población",
    header: "Población",
  },
];


const DepartamentoTable = () => {
  return (
    <>
      <Table data={data} columns={columns} />
    </>
  )
}

export default DepartamentoTable