
const {createFile, createFileSync} = require('./helpers/multiplication')

console.clear();


createFile(7)
    .then( (fileName) => console.log(fileName) )
    .catch( (err) => console.log(err) )

createFileSync(9)
    .then( (fileName) => console.log(fileName) )
    .catch( (err) => console.log(err) )

