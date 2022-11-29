
const {createFile, createFileSync} = require('./helpers/multiplication')
const argv = require('yargs').argv

console.clear();

// * after yargs

// node app.js
// node app.js --base=5
// node app --help
console.log(process.argv);
console.log(argv);
console.log('base: yargs- '+argv.base);


// * before yargs

// * array: arguments will be:
// * 0: global path where node app is installed
// * 1:  path where the current app is installed
// * 2:  my arg base for eg
// console.log(process.argv); // :array
// console.log(process.argv[2]);

// * const [ globaPath, appPath, base ] = process.argv
// const [ , , baseArg = 'base=5' ] = process.argv

// const [ , base] = baseArg.split('=')
// console.log("🚀 ~ file: app.js ~ line 14 ~ base:", base)


// * there a package for handle console args -> yargs 

// * node --help

// createFile(7)
//     .then( (fileName) => console.log(fileName) )
//     .catch( (err) => console.log(err) )

// createFileSync(base)
//     .then( (fileName) => console.log(fileName) )
//     .catch( (err) => console.log(err) )

