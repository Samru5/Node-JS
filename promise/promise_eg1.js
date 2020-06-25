var p = new Promise((resolve, reject) => {
    var result = 1 + 1;
    if (result == 2) {
        resolve("Success");
    }
    else {
        reject("Failed");
    }
})

p.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
})

//Output-This is in the then Success