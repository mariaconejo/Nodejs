exports.clima = function(grados){
    let msj = ""
    if(grados <= 10){
        msj = "Hace mucho frio"
    }else if (grados > 10 && grados <= 15 ){
        msj = "Hace poco frio"
    
    }else if(grados > 16 && grados <= 24 ){
        msj = "Hace una temperatura normal"
    }else if(grados > 25 && grados <= 30){
        msj = "Hace un poco de calor"
    }else{
        msj ="Hace mucho calor"
    }

    return msj
}