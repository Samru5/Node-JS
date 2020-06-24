/*Node.js includes fs module to access physical file system.
 The fs module is responsible for all the asynchronous or synchronous file I/O operations.*/
var fs=require('fs');


/*The Events module provides a way of working with events.
In Node.js, all events are an instance of the EventEmitter object */
var event=require('events');


const myEmiiter=new event.EventEmitter();   //creating object of EventEmitter

fs.readFile('./sample.txt',(err,data)=>{
    console.log(data.toString());       //gives data from sample.txt 

    myEmiiter.emit('read File');        //emitting event ie.And read file is event name.We can give any name
});

myEmiiter.on('read File',()=>{
    console.log('Read event occured');  //Registering Listner & defining event handler
});


/*Output-
Welcome to Node Js!!
Read event occured
*/