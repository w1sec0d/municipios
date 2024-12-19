import Swal from "sweetalert2";

const showValidationErrors = (
  validationErrors,
  text = "Error al actualizar los datos"
) => {
  if (validationErrors.inner) {
    Swal.fire({
      title: "Error",
      text: text,
      icon: "error",
      html: validationErrors.inner
        .map((error) => `<p>${error.message}</p>`)
        .join(""),
      customClass: {
        popup: "custom-swal-popup",
        confirmButton: "custom-swal-button",
      },
      background: "#202020",
      color: "#ffffff",
    });
  } else {
    Swal.fire({
      title: "error",
      text: "Porfavor verifica que todos los datos estén y sean correctos",
      icon: "error",
      customClass: {
        popup: "custom-swal-popup",
        confirmButton: "custom-swal-button",
      },
      background: "#202020",
      color: "#ffffff",
    });
  }
};

export default showValidationErrors;
