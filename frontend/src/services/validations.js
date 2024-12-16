import * as yup from 'yup';

const phoneRegExp = /^([+][0-9]{1,3} )?[0-9]{10}$/;

const validationRules = {
  // VALIDACIONES PERSONAS
  personas: yup.object().shape({
    nombre: yup.string().required('El nombre es obligatorio'),
    telefono: yup
      .string()
      .matches(phoneRegExp, 'El telefono debe tener el formato +## ########## o #########(9)')
      .required('El telefono es obligatorio'),
    // Agrega más campos y reglas según sea necesario
    edad: yup.number().required('La edad es obligatoria').positive('La edad debe ser positiva').integer('La edad debe ser un número entero'),
    sexo: yup.string().oneOf(['M', 'F'], 'El sexo debe ser M o F').notRequired(),
    VIVIENDA_id_vivienda: yup.number().nullable(),
    PERSONA_id_persona: yup.number().nullable()
  }),
};

export default validationRules;