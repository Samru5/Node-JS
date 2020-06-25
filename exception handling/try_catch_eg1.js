try {
    add();
}
catch (e) {
    console.log("Message:" + e.message);
    console.log("Name:" + e.name);
    console.log("StackTrace:" + e.stack);

}

/*Output-
Message:add is not defined
Name:ReferenceError
StackTrace:ReferenceError: add is not defined
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3

*/