/*Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). */
var http=require('http');

/*Node.js includes fs module to access physical file system.
 The fs module is responsible for all the asynchronous or synchronous file I/O operations.*/
var event=require('events');

var eventEmitter=new event.EventEmitter();      //creating object of EventEmitter

var server=http.createServer(function(req,res){     //creates server

    eventEmitter.emit('Someone requested','TEST'); //event trigger here 'Someone requested' is the event name & Registering Listner & defining event handler

    res.end('Server Works!');   //gives response on http://localhost:3000/
});


eventEmitter.on('Someone requested',function(data){
    console.log('A request has been done on server!!',data)
})//event listner



server.listen(3000,'localhost',function(){  //port is 3000,localhost is hostname
    console.log("Server started at port:3000");     //to stop server press ctrl+c on console
});



/*Output-On console-

Server started at port:3000
A request has been done on server!!
A request has been done on server!!

Prints Server Works! on http://localhost:3000/

And when we pass TEST to emitter & used that msg in on method then on console-
Server started at port:3000
A request has been done on server!! TEST
A request has been done on server!! TEST
*/