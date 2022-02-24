// Regular expressions
const regExp4Email = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regExp4Number = /^([0-9])*$/
const regEx4Names = /^[A-Za-z\s?]+$/;


export const validateEmail = (campo)=>{
  if(regExp4Email.test(campo)){
    return true
  }else{
    return false
  }
}

export const validateMesage = (campo)=>{
  if (campo.length < 300 && campo.length > 0){
    return true
  } else {
    return false
  }
}

export const validateNumber= (campo)=>{
  if(regExp4Number.test(campo)&& campo.length<13){
    return true
  }else{
    return false
  }
}

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