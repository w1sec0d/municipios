import Swal from 'sweetalert2';

const showValidationErrors = (validationErrors, text = "Error al actualizar los datos") => {
  Swal.fire({
    title: "error",
    text: text,
    icon: "error",
    html: validationErrors.inner
      .map((error) => `<p>${error.message}</p>`)
      .join(""),
    customClass: {
      popup: "custom-swal-popup",
    },
  });
};

export default showValidationErrors;