const visor = document.getElementById("visor")
let sinal = "";
let valor = 0;
let clicouNoIgual = false;
let jaTemVirgula = false;

limpaVisor();


function tecla(numero){
  if (numero == "."){
    if (jaTemVirgula){
      return;
    } else {  
    jaTemVirgula = true;
    }
  }
  if (clicouNoIgual) {
    limpaVisor();
  }
  if (visor.value == "0" && numero != "."){
    visor.value = numero;
  } else {
  visor.value += numero;
  }
  clicouNoIgual = false;
  
}
function limpaVisor(){
  visor.value = "";
  jaTemVirgula = false;
}
function limpaTudo(){
  limpaVisor();
  sinal = "";
  valor = 0;
}

function pegaSinal(tecla){
  if (sinal != ""){
    valor = total();
    visor.value = valor;
  } else {
    valor =  Number(visor.value);
    limpaVisor(); 
  }
  sinal = tecla;

}

function resultado(){
  if (sinal == ""){
    return;
  }
  visor.value = total();
  valor = 0;
  sinal = "";
}

function total(){
  clicouNoIgual = true;
  let total;
  switch(sinal){
    case "+":
      total = valor + Number(visor.value);
      break;
    case "-":
      total =  valor - Number(visor.value);
      break;
    case "/":
      total  = valor / Number(visor.value);
      break;
    case "*":
      total  = valor * Number(visor.value);
      break;
    default:
      break;
  }
  return total;
}