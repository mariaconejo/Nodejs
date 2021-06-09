
let arrayPositive = []
let arrayNegative = []
let msj = "";

function positive(arrayPositive){
    let suma = arrayPositive.reduce((previous, current) => current += previous)
    let prom = suma /arrayPositive.length
    return prom
}

function negative(arrayNegative){
    let suma = arrayNegative.reduce((previous, current) => current += previous)
    let prom = suma / arrayNegative.length
    return prom
}

exports.mediaArray = function(num){
    num.forEach(index  => {
        if(index > 0){
            arrayPositive.unshift(Number(index))
        }else{
            arrayNegative.unshift(Number(index))
        }
    });
    let positiveMedia = positive(arrayPositive)
    let negativeMedia = negative(arrayNegative)
    msj = `La media de los numeros POSITIVOS es :  ${positiveMedia} y la media de los numeros NEGATIVOS es :  ${negativeMedia}`
    return msj
}

