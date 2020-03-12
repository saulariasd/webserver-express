const http = require('http');

http.createServer((request, respuesta) => { //recibe un callback
    respuesta.writeHead(200, { 'Content-Type': 'aplicaction/json' });
    respuesta.write('Hola mundo');
    let salida = {
        nombre: 'Saul',
        edad: 26,
        url: request.url
    };
    respuesta.write(JSON.stringify(salida));
    respuesta.end();
}).listen(8080);
console.log('Escuchando el puerto 8080');