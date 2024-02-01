const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto) {
        return 'adivinaste';
    } else if (numeroAdivinado > numeroSecreto) {
        return 'El número secreto es menor. ¡Sigue intentando!';
    } else {
        return 'El número secreto es mayor. ¡Sigue intentando!';
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};
