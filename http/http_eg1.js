/*Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). */
var http=require('http');

//Use the createServer() method to create an HTTP server
http.createServer(function(req,res){
    res.write('<h1>Hello World</h1>');  ////write a response to the client
    res.end();          ////end the response

}).listen(8080,'localhost');        //the server object listens on port 8080 & hostname is localhost by default so its optional to write it


console.log('Server started....');  //prints on console when server gets start & do ctrl+c to stop that server manually on console


/*Output-
Prints Hello World on http://localhost:8080/
*/