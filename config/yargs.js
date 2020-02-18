const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    Limite: 'l',
    deafult: 10

}



const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)

.help()
    .argv;

module.exports = {
    argv
}