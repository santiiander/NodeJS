const http = require('http');
const hostname = '127.0.0.1'; //es lo mismo que decir LocalHost
const port = 3000;
const server = http.createServer((req,res) =>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('{"mensaje: Hola Mundo!!!"}');
});
server.listen(port,hostname,() =>{
    console.log("Iniciando servidor web")
});
