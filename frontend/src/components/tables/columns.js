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
      accessorKey: "direccion_vivienda",
      header: "Dirección Vivienda",
    },
    // {
    //   accessorKey: "VIVIENDA_id_vivienda",
    //   header: "ID Vivienda",
    // },
    // {
    //   accessorKey: "PERSONA_id_persona",
    //   header: "ID Cabeza de Familia",
    // },
  ],
  municipios: [
    {
      accessorKey: "id_municipio",
      header: "ID",
      editable: false,
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
      accessorKey: "gobernador",
      header: "Gobernador",
    },
    {
      accessorKey: "departamento_nombre",
      header: "Departamento",
    },
  ],
  proyectos: [
    {
      accessorKey: "id_proyecto",
      header: "ID",
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
      accessorKey: "municipio_nombre",
      header: "Municipio",
    },
  ],
  viviendas: [
    {
      accessorKey: "municipio_nombre",
      header: "Municipio",

      accessorKey: "id_vivienda",
      header: "ID",
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
    {
      accessorKey: "municipio_nombre",
      header: "Municipio",
    },
  ],
  eventos: [
    {
      accessorKey: "id_evento",
      header: "ID",
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
      accessorKey: "MUNICIPIO_id_municipio",
      header: "ID Municipio",
    },
  ],
  departamentos: [
    {
      accessorKey: "id_departamento",
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
      header: "Direccion",
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
  "viviendas/residentes": [
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
      header: "Fecha de Inicio",
    },
  ],
  "proyectos/encargados": [
    {
      accessorKey: "nombre",
      header: "Nombre",
    },
    {
      accessorKey: "telefono",
      header: "Telefono",
    },
  ],
};

export default columns;
