const regExpNombreApellido = /^[A-Za-z\s?]+$/;
const regExpNombre = /^[A-Za-z\s?]+$/;
const regExpFecha =
  /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
const regExpHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;
const regExpTxtArea = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/;

export const validateNombreApellido = (field) => {
  if (regExpNombreApellido.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateNombre = (field) => {
  if (regExpNombre.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validatetextarea = (field) => {
  if (regExpTxtArea.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateFecha = (field) => {
  if (regExpFecha.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validateProf = (field) => {
  if (
    regExpNombre.test(field) &&
    field.trim() !== "" &&
    (field === "Dra Liza Morgan" || field === "Dr Adrian Munir")
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateHora = (field) => {
  if (
    regExpHora.test(field) &&
    field.trim() !== "" &&
    (field === "10:00" ||
      field === "11:00" ||
      field === "12:00" ||
      field === "13:00" ||
      field === "16:00" ||
      field === "17:00" ||
      field === "18:00" ||
      field === "19:00" ||
      field === "20:00")
  ) {
    return true;
  } else {
    return false;
  }
};
