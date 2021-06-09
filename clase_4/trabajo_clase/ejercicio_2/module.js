let msj = "";

exports.cilindoVolumen = function(d, h){
    const radio = d / 2
    const volumenFormula = Math.PI * (Math.pow(radio,2))*h
    msj = `El volumen del cilindro es = ${volumenFormula}`
    return msj;
}