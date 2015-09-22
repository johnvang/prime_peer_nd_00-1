
var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');
var module3 = require('./module3');


//var funkyPancakes = require('./hello')

http.createServer(function(request, response){
    response.writeHead(200);
    //response.write(moduleTwo());
    response.write(module3.balance());
    response.write("$" + module3.figureItOut(1000000,100).toString());
    response.end();
}).listen(3000);
console.log("listening on port 3000");