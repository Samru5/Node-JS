/*Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. 
This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring. 

It means that when one request is send to server this blocking mechanism waits until it gets response.And then it sends the next request.
Blocking methods execute synchronously */


/*Node.js includes fs module to access physical file system.
 The fs module is responsible for all the asynchronous or synchronous file I/O operations.*/
var fs=require('fs');


var data=fs.readFileSync('sample.txt');
console.log(data.toString());
console.log('End Here.');



//It's a blocking code i.e until the read operation is completed, the next lines of code is not executed.
/*Output-
Welcome to Node Js
Hello everyone!!!
End Here.
*/