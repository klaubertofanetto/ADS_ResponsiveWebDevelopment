function validaCampo(id){
   let campoEntrada = document.getElementById(id);
   let alerta = document.getElementById("alerta"+id);
   if (campoEntrada.value == "") {
    alerta.className = "alerta-ligado";
   } else {
    alerta.className = "alerta-oculto";
   }
   if (isCampoInvalido(id, campoEntrada)) {
    document.getElementById("alertaDadoInvalido"+id).className = "alerta-ligado";
  } else {
    document.getElementById("alertaDadoInvalido"+id).className = "alerta-oculto";
  }
}

function isCampoInvalido(id, campoEntrada){
  if (((id == "email" && !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(campoEntrada.value)) ||
      (id == "cpf" && !/[0-9.-]/.test(campoEntrada.value))) && campoEntrada.value != ""
  ){
    return true;
  }
}