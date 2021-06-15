const fs = require('fs')
let path = './disney_movies.txt'
fs.readFile(path, "utf8", function(err, data) {
    if(err)
        return console.error(err)

    let str = data
    let array = str.split(/\r?\n/)
    let newArray = []
    
    array.forEach(element => {
        newArray.push(element.split(';'))  
    })
    newArray.forEach(element => {
        element[0] = 'Pelicula: '+ element[0]
        element[1] = 'Año: '+ element[1]
        element[2] = 'Genero: '+ element[2]
        element.forEach(item => {
            console.log(item)
        });
    })
})