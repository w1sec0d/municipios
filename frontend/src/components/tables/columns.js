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
      accessorKey: "nombre",
      header: "Nombre",
    },
    {
      accessorKey: "area",
      header: "Área",
    },
    {
      accessorKey: "poblacion",
      header: "Población",
    },
  ],
  responsables: [
    {
      accessorKey: "PERSONA_id_persona",
      header: "ID Persona",
    },
    {
      accessorKey: "PROYECTO_id_proyecto",
      header: "ID Proyecto",
    },
  ],
  propiedades: [
    {
      accessorKey: "VIVIENDA_id_vivienda",
      header: "ID Vivienda",
    },
    {
      accessorKey: "PERSONA_id_persona",
      header: "ID Persona",
    },
  ],
  "municipios/eventos": [
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
  "departamentos/municipios": [
    {
      accessorKey: "nombre",
      header: "Nombre",
    },
    {
      accessorKey: "ara",
      header: "Área",
    },
    {
      accessorKey: "presupuesto",
      header: "Presupuesto",
    },
  ],
  "personas/dependientes": [
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
      header: "Genero",
    },
  ],
  "personas/propiedades": [
    {
      accessorKey: "direccion",
      header: "direccion",
    },
    {
      accessorKey: "capacidad",
      header: "Capacidad",
    },
    {
      accessorKey: "niveles",
      header: "Niveles",
    },
  ]
};

export default columns;
