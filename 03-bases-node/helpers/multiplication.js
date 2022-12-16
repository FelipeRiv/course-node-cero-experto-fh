const fs = require('fs')

const createFile  = (base = 5, listar) => {

    return new Promise( (resolve, reject) => {

        try {

            const max = 10

            console.log('========================');
            console.log(`       Tabla del ${base } list ${listar}`);
            console.log('========================');
        
            let output = ''
        
            for (let index = 1; index <= max; index++) {
        
                // console.log(`${base} X ${index} = ${base * index}`);
                output += `${base} X ${index} = ${base * index}\n`
                
            }
            
            listar && console.log(output);
            
            // fs.writeFile( 'tabla-'+base+'.txt', output, (err) => {
            
                //     if (err) throw err;
        
                //     console.log('tabla-'+base+'.txt - created!');
            // })
        
            fs.writeFileSync( 'tabla-'+base+'.txt', output);
            
            // console.log('tabla-'+base+'.txt');

            resolve('tabla-'+base+'.txt created!')
            
        } catch (error) {
            reject('tabla-'+base+'.txt has failed!')
        }
      

    })
   

}

const createFileSync  = async (base = 5) => {

        try {

            const max = 10

            console.log('========================');
            console.log(`       Tabla del ${base}`);
            console.log('========================');
        
            let output = ''
        
            for (let index = 1; index <= max; index++) {
        
                // console.log(`${base} X ${index} = ${base * index}`);
                output += `${base} X ${index} = ${base * index}\n`
                
            }
            
            console.log(output);
        
            await fs.writeFileSync( 'tabla-'+base+'.txt', output);
            
            // console.log('tabla-'+base+'.txt');

            // resolve('tabla-'+base+'.txt created!')
            return 'tabla-'+base+'.txt created!'
            
        } catch (error) {
            // reject('tabla-'+base+'.txt has failed!')
            // return 'tabla-'+base+'.txt has failed!'
            throw error
        }   

}

module.exports = {
    createFile,
    createFileSync,
}