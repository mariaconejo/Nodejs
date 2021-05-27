const result = require('./module.js')
const myArgv = process.argv.slice(2)
console.log(result.cilindoVolumen(Number(myArgv[0]), Number(myArgv[1])))