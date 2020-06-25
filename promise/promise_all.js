const recordVideoOne = new Promise((resolve, request) => {
    resolve("Video 1 recorded");
})

const recordVideoTwo = new Promise((resolve, request) => {
    resolve("Video 2 recorded");
})

const recordVideThree = new Promise((resolve, request) => {
    resolve("Video 3 recorded");
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideThree
]).then((messages) => {
    console.log(messages);
})

/*Output-
[ 'Video 1 recorded', 'Video 2 recorded', 'Video 3 recorded' ]
*/