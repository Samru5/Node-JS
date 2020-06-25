const person = {
    "name": "John",
    "age": 12
};

function validation(p) {
    if (p.age > 18) {
        console.log("Person is valid for voting!");
    }
    else {
        throw new Error("Person's age is not valid for voting!!");
    }
}
try {
    validation(person);
}
catch (e) {
    console.log("Something wrong has happened!");
    console.log(e.message);
}

/*Output-
Something wrong has happened!
Person's age is not valid for voting!!
*/