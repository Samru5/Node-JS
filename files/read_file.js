/*Node.js includes fs module to access physical file system.
 The fs module is responsible for all the asynchronous or synchronous file I/O operations.*/
var fs=require('fs');

//function(err,data) is a callback function gets execute after file read is complete
fs.readFile('./sample.txt',function(err,data){  //given current path for file name
    if(err){
        console.log(err);       //if any error occurs prints error
    }
    else{
        console.log(data.toString());   //gives data inside the  file
    }
});