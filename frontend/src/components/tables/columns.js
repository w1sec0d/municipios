const columns = {
  personas: [
    {
      accessorKey: "id_persona", // Match the key in the data
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
  municipios: [
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
  proyectos: [
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
  viviendas: [
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
  eventos: [
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
  departamentos: [
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
