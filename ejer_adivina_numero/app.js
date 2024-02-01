const readlineSync = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingresa un numero: ');
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el numero del 1 al 100.\n');

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUsuario();
        const resultado = verificarAdivinanza(numeroSecreto, numeroAdivinado);

        if (resultado === 'adivinaste') {
            console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
            break; // Salir del bucle
        } else {
            console.log(resultado);
        }
    }
};

juegoAdivinanza();
