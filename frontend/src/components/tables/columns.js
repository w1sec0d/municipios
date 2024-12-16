const columns = {
  personas: [
    {
      accessorKey: "id_persona", // Match the key in the data
      header: "ID", // Displayed in the table header
    },
    {
      accessorKey: "nombre",
      header: "Nombre",
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
    {
      accessorKey: "VIVIENDA_id_vivienda",
      header: "ID Vivienda",
    },
    {
      accessorKey: "PERSONA_id_persona",
      header: "ID Cabeza de Familia",
    },
  ],
  municipios: [
    {
      accessorKey: "id_municipio",
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
    {
      accessorKey: "PERSONA_id_persona",
      header: "ID Gobernador",
    },
    {
      accessorKey: "DEPARTAMENTO_id_departamento",
      header: "ID Departamento",
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
    {
      accessorKey: "estado",
      header: "Estado",
    },
    {
      accessorKey: "MUNICIPIO_id_municipio",
      header: "ID Municipio",
    },
  ],
  viviendas: [
    {
      accessorKey: "id_vivienda", // Match the key in the data
      header: "ID", // Displayed in the table header
    },
    {
      accessorKey: "MUNICIPIO_id_municipio",
      header: "ID Municipio",
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
      header: "ID Municipio",
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
