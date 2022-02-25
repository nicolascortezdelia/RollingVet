//const regExNombre = /^[A-Za-z\s?]+$/;
const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
const regExTel = /^([0-9]{5})+((-{1})*)+([0-9]{6})$/;
const regEx4Names = /^[A-Za-z\s?]+$/;

/*const validateName = (field)=>{
   if(regExNombre.test(field) && field.trim() !== ""){
       return true;
   }else{
       return false;
   }
};*/

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
    if (regExEmail.test(campo)){
        alert("La dirección de email es correcta.");
       } else {
        alert("La dirección de email es incorrecta.");
       }
};
