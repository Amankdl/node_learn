// Creating server
const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((request, response) => {
    // console.log(request);

    // sending plain text
    // response.setHeader('Content-Type', 'text/plain');
    // response.write('Hello Bro..');

    // sending HTML Text
    // response.setHeader('Content-Type', 'text/html');
    // response.write('<h1>Hello Bro..<h1>');
    // response.write('<h2>This is second line<h2>');

    // Sending HTML Files and basic routing
    response.setHeader('Content-Type', 'text/html');
    let path = './views/';
    switch (request.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-me': //redirection  
            response.statusCode = 301; //redirection status code
            response.setHeader('Location', '/about');
            response.end();
            break;
        case '/product':
            path += 'product.html';
            response.statusCode = 200;
            break;
        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            response.end();
        } else {
            // response.write(data); //or we can send data in end() directly.
            response.end(data);
        }
    });
})

server.listen(3000, 'localhost', () => {
    console.log("Sever started successfully");
});