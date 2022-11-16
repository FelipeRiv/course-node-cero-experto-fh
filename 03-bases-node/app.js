const fs = require('fs')

const base = 3
const max = 10

let output = ''

console.clear();

console.log('========================');
console.log(`       Tabla del ${base}`);
console.log('========================');

for (let index = 1; index <= max; index++) {

    // console.log(`${base} X ${index} = ${base * index}`);
    output += `${base} X ${index} = ${base * index}\n`
    
}

console.log(output);

fs.writeFile( 'tabla-'+base+'.txt', output, (err) => {

    if (err) throw err;

    console.log('tabla-'+base+'.txt - created!');


})