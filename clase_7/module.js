
exports.leerFrutas = function(fruta){
    let frutas = ["Manzana", "Pera", "Uva", "Sandía", "Banano", "Melocotón", "Piña", "Maracuyá", "Mandarina", "Mango"]
    let msj = ""
    if (frutas.indexOf(fruta) === 1) {
        msj = 'La fruta se encuentra en el arreglo';
    } else {
        msj = 'La fruta no encuentra en el arreglo';
    }
    return msj;
};

// El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.