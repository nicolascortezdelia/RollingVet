const regExpNombreApellido = /^[A-Za-z\s?]+$/;
const regExpNombre = /^[A-Za-z\s?]+$/;

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

let date = new Date()
let output = date.getFullYear()+ '-'+ `${(date.getMonth()+1)}`.padStart(2,'0') + '-' + `${(date.getDate())}`.padStart(2,'0') 
let output2 = date.getFullYear()+ '-'+ `${(date.getMonth()+1) + 1}`.padStart(2,'0') + '-' + `${(date.getDate())}`.padStart(2,'0') 



export const validateFecha =(campo)=>{

  console.log(output)
  console.log(campo)
  if( campo <= output2 && campo > output) {
  return true
  }else{
    return false
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
