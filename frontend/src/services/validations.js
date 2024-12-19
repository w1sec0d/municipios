import * as yup from 'yup';

const phoneRegExp = /^([+][0-9]{1,3} )?[0-9]{10}$/;

const validationRules = {
  // VALIDACIONES PERSONAS
  personas: yup.object().shape({
    id_persona : yup.number('La ID persona debe ser un número').integer('La ID persona debe ser un número entero').positive('La ID persona debe ser un número positivo').nullable(),
    nombre: yup.string().required('El nombre es obligatorio'),
    telefono: yup
      .string()
      .matches(phoneRegExp, 'El telefono debe tener el formato +## ########## o #########(10)')
      .required('El telefono es obligatorio'),
    edad: yup.number('La edad debe ser un valor numérico').required('La edad es obligatoria').positive('La edad debe ser positiva').integer('La edad debe ser un número entero'),
    sexo: yup.string().oneOf(['M', 'F'], 'El sexo debe ser M o F').notRequired(),
    VIVIENDA_id_vivienda: yup.number('La ID vivienda debe ser un número').integer().nullable(),
    PERSONA_id_persona: yup.number('La ID cabeza de familia debe ser un número').integer().nullable()
  }),
  //VALIDACIONES MUNICIPIOS
    municipios: yup.object().shape({
        nombre: yup.string().required('El nombre es obligatorio'),
        area: yup.number('El area debe ser un valor numérico').required('El area es obligatoria').positive('El area debe ser positiva'),
        presupuesto: yup.number('El presupuesto debe ser un valor numérico').required('El presupuesto es obligatorio').positive('El presupuesto debe ser positivo'),
  
    }),

    //VALIDACIONES VIVIENDAS
    viviendas: yup.object().shape({
        direccion: yup.string().required('La dirección es obligatoria'),
        capacidad: yup.number().required('La capacidad es obligatoria').positive('La capacidad debe ser positiva').integer('La capacidad debe ser un número entero'),
        niveles: yup.number().required('Los niveles son obligatorios').positive('Los niveles deben ser positivos').integer('Los niveles deben ser un número entero'),
        municipio_nombre: yup.string().required('El municipio es obligatorio')
        //municipio: yup.number().required('La ID municipio es obligatoria').positive('La ID municipio debe ser positiva').integer('La ID municipio debe ser un número entero')
    }),

    //VALIDACIONES DEPARTAMENTOS
    departamentos: yup.object().shape({
        nombre: yup.string().required('El nombre es obligatorio'),
        area: yup.number().required('El area es obligatoria').positive('El area debe ser positiva'),
        poblacion: yup.number().required('La población es obligatoria').positive('La población debe ser positiva').integer('La población debe ser un número entero')
    }),

    //VALIDACIONES PROYECTOS
    proyectos: yup.object().shape({

        nombre: yup.string().required('El nombre es obligatorio'),
        presupuesto: yup.number().required('El presupuesto es obligatorio').positive('El presupuesto debe ser positivo'),
        descripcion: yup.string().max(255, 'La descripción no puede exceder los 255 caracteres'),
        fecha_inicio: yup.date().required('La fecha de inicio es obligatoria'),
        fecha_fin: yup.date().required('La fecha de fin es obligatoria'),
        estado: yup.string().required('El estado es obligatorio')
    }),

    //VALIDACIONES EVENTOS
    eventos: yup.object().shape({
        nombre: yup.string().required('El nombre es obligatorio'),
        presupuesto: yup.number().required('El presupuesto es obligatorio').positive('El presupuesto debe ser positivo'),
        descripcion: yup.string().required('La descripción es obligatoria').max(255, 'La descripción no puede exceder los 255 caracteres'),
        fecha_inicio: yup.date().required('La fecha de inicio es obligatoria'),
        fecha_fin: yup.date().required('La fecha de fin es obligatoria'),
    }), 
};



export default validationRules;