/*Node.js includes fs module to access physical file system.
 The fs module is responsible for all the asynchronous or synchronous file I/O operations.*/
var fs=require('fs');


fs.writeFile('./demo.txt','Welcome everyone!!',function(err){   //writes data into file & creates new file if given file doesn't exist
    if(!err){

        fs.readFile('./demo.txt',function(err,data){    //if no error then perform read opeartion
            
            if(!err){
                console.log(data.toString());       //gives Welcome everyone!!
            }
        })
    }
})