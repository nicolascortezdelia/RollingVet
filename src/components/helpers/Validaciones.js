const regExNombre = /^[A-Za-z\s?]+$/;
const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
const regExTel = /^([0-9]{5})+((-{1})*)+([0-9]{6})$/;

const validateName = (field)=>{
   if(regExNombre.test(field) && field.trim() !== ""){
       return true;
   }else{
       return false;
   }
};

const validateTel = (campo)=>{
    if(/^([0-9]{5})+(-)+([0-9]{6})$/i.test(campo))
{
    alert("correcto");
}else{
    alert("Ingrese un teléfono correcto");
}
};

const validateEmail = (campo)=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(campo)){
        alert("La dirección de email es correcta.");
       } else {
        alert("La dirección de email es incorrecta.");
       }
};
