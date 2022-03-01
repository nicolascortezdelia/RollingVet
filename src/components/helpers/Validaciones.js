//EXPRESIONES REGULARES PARA CRUD PACIENTES

const regExEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regExTel = /^([0-9]{5})+((-{1})*)+([0-9]{6})$/;
const regEx4Names = /^[A-Za-z\s?]+$/;

//EXPRESIONES REGULARES PARA CRUD TURNO
const regExpHora =  /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;
const regExpFecha = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
const regExpTxtArea =  /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/;
const regExpNombre = /^[A-Za-z\s?]+$/;
const regExpNombreApellido = /^[A-Za-z\s?]+$/;


//VALIDACIONES PARA CRUD PACIENTES

export const validateNames = (campo) => {
    if (
      regEx4Names.test(campo) &&
      campo.trim().length < 23 &&
      campo.trim().length > 0 &&
      campo !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };


export const validateTel = (campo)=>{
    if(regExTel.test(campo))
{
    alert("correcto");
}else{
    alert("Ingrese un teléfono correcto");
}
};


export const validateEmail = (campo)=>{
  if(regExEmail.test(campo)){
    return true
  }else{
    return false
  }
};

//VALIDACIONES PARA CRUD TURNOS

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

export const validatetextarea = (field) => {
  if (regExpTxtArea.test(field) && field.trim() !== "") {
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

export const validateNombreApellido = (field) => {
  if (regExpNombreApellido.test(field) && field.trim() !== "") {
    return true;
  } else {
    return false;
  }
};
