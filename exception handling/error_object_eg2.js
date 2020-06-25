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

validation(person);

/*Output-
Error: Person's age is not valid for voting!!
    at Object.<anonymous> (C:\Users\sashetye\Documents\npm calculator output\node js\exception handling\error_object_eg2.js:15:1)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
*/

