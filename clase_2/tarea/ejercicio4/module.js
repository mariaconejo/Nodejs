let msj = '';


exports.calculadora = function(operacion, num1 ,num2) {

  if (operacion === 'sumar') {
    return num1 + num2
  } else if (operacion === 'restar') {
    return num1 - num2
  } else if (operacion  === 'multiplicar') {
    return num1 * num2
  } else if(operacion === 'dividir') {
    if (num2 === 0) {
        msj = "Error matematico no se puede dividir entre 0"
      return msj
    } else {
      return num1 / num2;
    }
  } else { 
      msj = "Ingrese el nombre de una operacion valida"
    return msj
  }
  
}

