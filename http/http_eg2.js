/*Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). */
var http=require('http');

var server=http.createServer(function(req,res){     //creates server
    res.end('Server Works!');   //gives response on http://localhost:3000/
});


server.listen(3000,'localhost',function(){  //port is 3000,localhost is hostname
    console.log("Server started at port:3000");     //to stop server press ctrl+c on console
});