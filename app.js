const Chance = require("chance");
const chance = new Chance();

const nombreRandom = chance.name();
const edadRandom=chance.age();
const mailRandom=chance.email();

console.log("Nombre Aleatorio", nombreRandom)
console.log("Edad Aleatoria", edadRandom)
console.log("Email Aleatorio", mailRandom)