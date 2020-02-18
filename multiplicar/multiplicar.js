const fs = require('fs');
const colors = require('colors');

let ListarTabla = (base, Limite = 10) => {


    console.log('===================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('===================='.green);
    for (let i = 1; i <= Limite; i++) {

        console.log(`${ base } * ${ i } = ${ base * i }`);


    }



}

let crearArchivo = (base, Limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= Limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;
        }


        fs.writeFile(`tablas/tabla-${ base }-al-${ Limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ Limite }.txt`);

        });

    });

}


module.exports = {
    crearArchivo,
    ListarTabla
}