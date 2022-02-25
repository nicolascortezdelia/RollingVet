const regExpNombreApellido = /^[A-Za-z\s?]+$/;
const regExpNombre = /^[A-Za-z\s?]+$/;
const regExpFecha = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
const regExpHora = /T(?:0[917]|10)/;
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

export const validateHora = (field) => {
  if (regExpHora.test(field) && field.trim() !== "") {
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
