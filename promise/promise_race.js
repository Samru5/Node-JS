const recordVideoOne = new Promise((resolve, request) => {
    resolve("Video 1 recorded");
})

const recordVideoTwo = new Promise((resolve, request) => {
    resolve("Video 2 recorded");
})

const recordVideThree = new Promise((resolve, request) => {
    resolve("Video 3 recorded");
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideThree
]).then((message) => {
    console.log(message);
})

/*Output-
Video 1 recorded
*/