function areaOfRect(length, breadth) {
    if (isNaN(length) || isNaN(breadth)) {
        throw "Parameter is not a number";
    }
}

try {
    areaOfRect(5, 'A');
}
catch (e) {
    console.log("Exception:" + e);
}

/*Output-
Exception:Parameter is not a number
*/