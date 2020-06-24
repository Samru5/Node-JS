/*Non-blocking methods execute asynchronously. 
All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, and accept callback functions.*/



/*Node.js includes fs module to access physical file system.
 The fs module is responsible for all the asynchronous or synchronous file I/O operations.*/
var fs=require('fs');


//function(err,data) is callback function gets execute after file read is complete
fs.readFile('sample.txt',function(err,data){
    if(err){
        console.log(err);
    }

    //setTimeout() can be used to schedule code execution after a designated amount of milliseconds.
    setTimeout(()=>{
        console.log("Display after 2 seconds");

    },2000);
});

console.log("Start here...")


/*Here non-blocking is asynchronous so until readfile operation takes place it dispalys the outside console message first & then
prints the data inside setTimeout() */

/*Output-
Start here...
Display after 2 seconds
*/