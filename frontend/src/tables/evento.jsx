import Table from './table.jsx';
import data from './data.json';

const columns = [
  {
    accessorKey: "id_evento", // Match the key in the data
    header: "ID", // Displayed in the table header
  },
  {
    accessorKey: "MUNICIPIO_id_municipio",
    header: "Municipio",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "presupuesto",
    header: "Presupuesto",
  },
  {
    accessorKey: "descripcion",
    header: "Descripción",
  },
  {
    accessorKey: "fecha_inicio",
    header: "Fecha de Inicio",
  },
  {
    accessorKey: "fecha_fin",
    header: "Fecha de Fin",
  },
];


const EventoTable = () => {
  return (
    <>
      <Table data={data} columns={columns} />
    </>
  )
}

export default EventoTable