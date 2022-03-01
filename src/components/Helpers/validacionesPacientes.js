//const regExNombre = /^[A-Za-z\s?]+$/;
const regExEmail = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regExTel = /^([0-9]{5})+((-{1})*)+([0-9]{6})$/;
const regEx4Names = /^[A-Za-z\s?]+$/;



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
}