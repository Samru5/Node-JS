/*Node.js includes fs module to access physical file system.
 The fs module is responsible for all the asynchronous or synchronous file I/O operations.*/
var fs=require('fs');

//function(err) is a callback function
//here if data.txt is not exist then creates new file & writes data & if we give any existing file path  then it overwrites data in that file
fs.writeFile('./data.txt','How are you?',function(err){     //writes How are you? in file
    if(err){
        console.log(err);   //if any error occurs prints error
    }
    else{
        console.log("Data written successfully!")
    }
});
