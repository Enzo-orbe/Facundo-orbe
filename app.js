const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        ListarTabla(argv.base, argv.Limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.Limite)
            .then(Archivo => console.log(`Archivo creado ${ Archivo}`))
            .catch(e => console.log(e));

        break;

    default:
        console.log('Comando no reconocido');

}


//console.log(process.argv);

//let argv2 = process.argv;

console.log(argv.base);
console.log('limite', argv.limite);



//let parametro = argv[2];
//let base = parametro.split('=')[1]