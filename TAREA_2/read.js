//iniciando programacion.
const fs = require('fs');
const readline = require('readline');
let continueP = true;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//menu interactivo:
function showMenu(){

    console.log('Menu de opciones:');
    console.log('1. Leer inventario');
    console.log('2. Salir');
    rl.question('selecciona una opcion: ', (option) => {
        if (option === '1') {
            rl.question('Ingresa el nombre del archivo a leer: ', (archiveName) => {
                readFile(archiveName);
                // Espera un poco antes de mostrar el menú de nuevo
                setTimeout(showMenu, 500);
            });
        } else if (option === '2') {
            console.log('Saliendo del sistema...');
            rl.close();
        } else {
            console.log('Opción no válida');
            showMenu();
        }
    });



    

}




//archive reading function
function readFile(archive) {
    fs.readFile(archive, 'utf8', (err, data) => { 
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        console.log('datos leidos: ');
        console.log(data);
    })

}



showMenu();//llamando a la funcion de lectura de archivo