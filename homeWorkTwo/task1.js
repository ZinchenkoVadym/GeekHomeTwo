//1. Task one

function myFor(element, limit, callback) {
    if (limit === 0) {
        return;
    }
    callback(element);
    return myFor(element, --limit, callback)
}

myFor(1, 10, function(element) {
    console.log(element)
})
