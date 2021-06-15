const fs = require('fs')
let path = process.cwd();
const text = 'Nombre, Apellido, Edad\n Oliver, Brown, 20\n Jack, Murphy, 35\n Charlie, Rodriguez, 38\n George, Smith, 22\n James, Anderson, 23\n William, Walsh, 25'

fs.writeFile(`${path}/list.txt`,text, function(err){
    if(err)
        return console.error(err)
    console.log("Archivo creado y salvado")

})