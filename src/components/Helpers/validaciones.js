const regExpNombreApellido = /^[A-Za-z\s?]+$/;

export const validateNombreApellido = (field) => {
    if (regExpNombreApellido.test(field) && field.trim() !== "") {
      return true;
    } else {
      return false;
    }
  };