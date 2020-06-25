calculate = function (x, y) {
    console.log("x=" + x + " y=" + y);
    positiveSum(x, y).then(function (result) {
        console.log("Sum=" + result);
    }).catch(err => {
        console.log(err);
        console.log("Function Ends!");
    })
}
positiveSum = function (x, y) {
    return new Promise(function (resolve, reject) {
        if (x + y > 0) {
            resolve(x + y);
        }
        else {
            reject("Sum is not positive");
        }
    })
}

calculate(3, 6);

/*Output-
x=3 y=6
Sum=9
*/

/*Output-
x=7 y=-12
Sum is not positive
Function Ends!
*/