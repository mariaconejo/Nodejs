let arrayNumbers = []

// funcion que retorna el numero mayor
function biggerNumber(arrayNumbers){
    let mayor = Math.max(...arrayNumbers)
    return mayor
}

// funcion que retorna el numero menor
function smallerNumber(arrayNumbers){
    let menor = Math.min(...arrayNumbers)
    return menor
}

// funcion que me retorna la suma de los 20 numeros
function sumNumbers(arrayNumbers){
    let total = arrayNumbers.reduce((a, b) => a + b, 0);
    return total
}

// funcion que me retorna los numeros ordenados de menor a mayor

function orderNumbers(arrayNumbers){
    let order = arrayNumbers.sort(function(a,b) {
        return a-b
    })
    return order
}

// funcion que me agrega los numeros a un array y me retorna una respuesta con todos lo que se pidio en el ejercicio

exports.resultsArray = function(num){
    let msj = ""
    num.forEach(index =>{
        if(index <= 20){
            arrayNumbers.push(Number(index))
        }
    });

    let bigger = biggerNumber(arrayNumbers)
    let smaller = smallerNumber(arrayNumbers)
    let sum = sumNumbers(arrayNumbers)
    let order = orderNumbers(arrayNumbers)

    msj = `El numero mayor es: ${bigger},
        El numero menor es: ${smaller},
        La suma de los numeros es: ${sum},
        Los numeros ordenados : ${order}`

        
    return msj
}
