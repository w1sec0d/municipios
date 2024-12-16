const columns = {
  persona: [
    {
      accessorKey: "id", // Match the key in the data
      header: "ID", // Displayed in the table header
    },
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
  ],
  municipio: [
    {
      accessorKey: "id",
      header: "ID",
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
  ],
  proyecto: [
    {
      accessorKey: "id_proyecto", // Match the key in the data
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
  ],
  vivienda: [
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
  ],
  evento: [
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
  ],
  departamento: [
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
  ],
};

export default columns;
